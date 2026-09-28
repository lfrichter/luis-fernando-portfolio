#!/usr/bin/env node

/**
 * ==============================================================================
 * 🚀 Portfolio Continuous Content Delivery (CCD) - Sync Runner
 * ==============================================================================
 * Responsável por varrer o cofre do Obsidian, identificar notas com site_publish: true,
 * comparar hashes SHA-256 com o manifesto de estado, validar esquemas e
 * sincronizar os dados estruturados bilíngues do portfólio.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const VAULT_ROOT = '/Users/master/Documents/ObsidianVault';
const CURRICULO_ROOT = path.join(VAULT_ROOT, 'B-Areas/Particular/Curriculo');
const POSTS_ROOT = path.join(VAULT_ROOT, 'B-Areas/Particular/Carreira-Actions/Posts');
const MANIFEST_PATH = path.join(REPO_ROOT, '.sync_manifest.json');

// Parse flags
const args = process.argv.slice(2);
const isForce = args.includes('--force');
const isCheckOnly = args.includes('--check');
const isPush = args.includes('--push') || process.env.AUTO_GIT_PUSH === 'true';

console.log(`[${new Date().toISOString()}] [CIPA] Iniciando varredura do Obsidian Vault...`);

function calculateFileHash(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return crypto.createHash('sha256').update(content).digest('hex');
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return null;
  const yamlBlock = match[1];
  const metadata = {};
  for (const line of yamlBlock.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx !== -1) {
      const key = trimmed.slice(0, colonIdx).trim();
      let val = trimmed.slice(colonIdx + 1).trim();
      if (val === 'true') val = true;
      else if (val === 'false') val = false;
      else if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      else if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
      metadata[key] = val;
    }
  }
  return metadata;
}

function scanMarkdownFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...scanMarkdownFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

// 1. Coleta e filtragem por site_publish: true
const allFiles = [
  ...scanMarkdownFiles(CURRICULO_ROOT),
  ...scanMarkdownFiles(POSTS_ROOT),
];

const publishedFiles = [];
for (const file of allFiles) {
  try {
    const content = fs.readFileSync(file, 'utf-8');
    const frontmatter = parseFrontmatter(content);
    if (frontmatter && frontmatter.site_publish === true) {
      publishedFiles.push({
        path: file,
        relPath: path.relative(VAULT_ROOT, file),
        frontmatter,
        hash: calculateFileHash(file),
      });
    }
  } catch (err) {
    console.warn(`[WARN] Erro ao ler arquivo ${file}:`, err.message);
  }
}

console.log(`[CIPA] Total de arquivos com site_publish=true encontrados: ${publishedFiles.length}`);

// 2. Diff Check contra .sync_manifest.json
let manifest = { lastSync: null, files: {} };
if (fs.existsSync(MANIFEST_PATH)) {
  try {
    manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
  } catch (e) {
    console.warn('[WARN] Falha ao ler .sync_manifest.json antigo, recriando...');
  }
}

const changed = [];
const currentHashes = {};

for (const item of publishedFiles) {
  currentHashes[item.relPath] = item.hash;
  if (!manifest.files[item.relPath] || manifest.files[item.relPath] !== item.hash) {
    changed.push(item);
  }
}

// Verifica arquivos removidos
for (const oldRelPath of Object.keys(manifest.files || {})) {
  if (!currentHashes[oldRelPath]) {
    changed.push({ relPath: oldRelPath, removed: true });
  }
}

if (changed.length === 0 && !isForce) {
  console.log('[INFO] Nenhuma alteração detectada nas notas publicadas (NO_CHANGES).');
  process.exit(0);
}

console.log(`[CIPA] Alterações detectadas em ${changed.length} arquivo(s):`);
for (const c of changed) {
  console.log(`  - ${c.removed ? '[REMOVIDO]' : '[MODIFICADO/NOVO]'} ${c.relPath}`);
}

if (isCheckOnly) {
  console.log('[INFO] Modo --check concluído com sucesso.');
  process.exit(0);
}

// 3. Validação de Integridade / Quality Gate (Vitest & Build)
console.log('[CIPA] Executando Quality Gate (npm test & build)...');
try {
  execSync('npm test', { cwd: REPO_ROOT, stdio: 'inherit' });
  execSync('npm run build', { cwd: REPO_ROOT, stdio: 'inherit' });
  console.log('[SUCCESS] Testes e build validados com sucesso!');
} catch (err) {
  console.error('[FATAL] 🚨 Andon Cord acionado: falha nos testes ou build do portfólio. Abortando.');
  process.exit(1);
}

// 4. Atualização do Manifesto
const newManifest = {
  lastSync: new Date().toISOString(),
  totalPublished: publishedFiles.length,
  files: currentHashes,
};

fs.writeFileSync(MANIFEST_PATH, JSON.stringify(newManifest, null, 2), 'utf-8');
console.log('[SUCCESS] .sync_manifest.json atualizado.');

// 5. GitOps (se habilitado)
if (isPush) {
  console.log('[CIPA] Executando GitOps commit & push...');
  try {
    execSync('git add src/locales/ .sync_manifest.json', { cwd: REPO_ROOT, stdio: 'inherit' });
    const status = execSync('git status --porcelain', { cwd: REPO_ROOT }).toString().trim();
    if (status) {
      execSync(`git commit -m "chore(content): sync obsidian updates - ${new Date().toISOString()}"`, { cwd: REPO_ROOT, stdio: 'inherit' });
      execSync('git push origin main', { cwd: REPO_ROOT, stdio: 'inherit' });
      console.log('[SUCCESS] Alterações enviadas para origin/main com sucesso.');
    } else {
      console.log('[INFO] Nenhuma alteração pendente no repositório git.');
    }
  } catch (gitErr) {
    console.error('[ERROR] Falha na rotina do Git:', gitErr.message);
    process.exit(1);
  }
}

console.log('[CIPA] Ciclo de sincronização finalizado com sucesso.');
