#!/usr/bin/env node

/**
 * ==============================================================================
 * 🚀 Portfolio Continuous Content Delivery (CCD) - Sync Runner
 * ==============================================================================
 * Responsável por varrer o cofre do Obsidian, identificar notas com site_publish: true,
 * comparar hashes SHA-256 com o manifesto de estado, sincronizar metadados estruturados
 * (incluindo a classificação de Tier, links de GitHub e Website), validar esquemas
 * via Quality Gate (Vitest & Build) e registrar o estado consolidado.
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

// Mapeamento declarativo entre projetos do portfólio e notas do Obsidian Vault
const PROJECT_MAPPINGS = [
  { id: 'eupizza', detailKey: 'eupizza', match: 'Project - EuPizza - Atendimento por Voz - BRNow.md' },
  { id: 'smart-shorts', detailKey: 'smart_shorts', match: 'Project - SmartShorts - Backend.md' },
  { id: 'ask-richter', detailKey: 'ask_richter', match: 'Project - AskRichter AI Career Agent.md' },
  { id: 'canaoaves', detailKey: 'canaoaves', match: 'Project - Canaoaves.md' },
  { id: 'sdlc-ia', detailKey: 'sdlc_ia', match: 'Side Project - Framework Engenharia IA.md' },
  { id: 'spider-hub', detailKey: 'spider_hub', match: 'Project - Spider - Integration Engineer.md' },
  { id: 'toot', detailKey: 'toot', match: 'Project - Toot Desafio de Viagens longas.md' },
  { id: 'shosales', detailKey: 'shosales', match: 'Project - Shosales Review - Otimização de Performance 10x e Testes E2E.md' },
  { id: 'k-pro', detailKey: 'k_pro', match: 'Project - K-Pro After Sales.md' },
  { id: 'favorite-products-api', detailKey: 'favorite_products', match: 'Side Project - Favourite Products.md' },
  { id: 'onepush', detailKey: 'onepush', match: 'Project - OnePush.md' },
  { id: 'video-factory-automated', detailKey: 'video_factory', match: 'Project - Video Factory Automated.md' },
  { id: 'semantic-cache', detailKey: 'semantic_cache', match: 'PoC - Cache Semântico de Alta Performance.md' },
  { id: 'pyspark-jobs', detailKey: 'pyspark', match: 'PoC - Data Analisys using Spark and Jupyter.md' },
  { id: 'postmark-email-task', detailKey: 'postmark_email', match: 'Challenge - E-mail Task Manager Conversacional 📥 Postmark.md' },
  { id: 'ecommerce-k6', detailKey: 'ecommerce_k6', match: 'Side Project - Performance & Observability Suite (E-Commerce).md' },
  { id: 'twin-quest', detailKey: 'twin_quest', match: 'Side Project - Twin Quest.md' },
  { id: 'cat-guardian', detailKey: 'cat_guardian', match: 'Challenge - Cat Guardian.md' },
  { id: 'learning-intelligence', detailKey: 'learning_intelligence', match: 'Side Project - Learning Intelligence.md' },
  { id: 'my-bookmarks', detailKey: 'my_bookmarks', match: 'Side Project - My Bookmarks.md' },
  { id: 'ftd-gestao-acessos', detailKey: 'ftd_gestao_acessos', match: 'Project - FTD - Gestão de Acessos para Conteúdo Educacional.md' },
  { id: 'ftd-gerenciador-iconografico', detailKey: 'ftd_gerenciador_iconografico', match: 'Project - FTD - Gerenciador Iconográfico.md' },
  { id: 'ftd-controle-producao', detailKey: 'ftd_controle_producao', match: 'Project - FTD - Controle de Produção Editorial.md' },
  { id: 'aso-saude', detailKey: 'aso_saude', match: 'Project - ASO - Reconstrução e Modernização de Sistema de Gestão de Saúde.md' },
  { id: 'indicos-saas', detailKey: 'indicos_saas', match: 'Project - Índicos SaaS Multi-tenant para Marketing de Indicação.md' },
  { id: 'startup-center', detailKey: 'startup_center', match: 'Project - Startup Center - Ecossistema de Ferramentas para Apoio a Startups.md' },
  { id: 'sisporta', detailKey: 'sisporta', match: 'Project - Sisporta - Sincronização Inteligente de Dados.md' },
  { id: 'simulados-medicos', detailKey: 'simulados_medicos', match: 'Project - Simulados Médicos - Plataforma para Exames de Especialidade Médica.md' },
  { id: 'fanoty', detailKey: 'fanoty', match: 'Project - Fanoty - Modernização de Backend e API de Esportes.md' },
  { id: 'grappl', detailKey: 'grappl', match: 'Project - Grappl - Modernização de API e Entrega Rápida de Funcionalidades.md' },
  { id: 'huktup', detailKey: 'huktup', match: 'Project - Huktup.md' },
  { id: 'air-combat-3d', detailKey: 'air_combat_3d', match: 'Side Project - Air Combat 3D.md' },
  { id: 'web3-react-dapp', detailKey: 'web3_react_dapp', match: 'Side Project - Web3 React dApp Prototype.md' },
];

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
        filename: path.basename(file),
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

// 2. Sincronização de Metadados de Projetos (Tier, GitHub, LiveUrl)
let projectFilesModified = false;

function syncProjectsMetadata() {
  const ptSummaryPath = path.join(REPO_ROOT, 'src/locales/pt/projects_summary.json');
  const enSummaryPath = path.join(REPO_ROOT, 'src/locales/en/projects_summary.json');

  if (!fs.existsSync(ptSummaryPath) || !fs.existsSync(enSummaryPath)) {
    console.warn('[WARN] Arquivos de resumo de projetos não encontrados.');
    return;
  }

  const ptSummary = JSON.parse(fs.readFileSync(ptSummaryPath, 'utf-8'));
  const enSummary = JSON.parse(fs.readFileSync(enSummaryPath, 'utf-8'));

  let summaryChanged = false;

  for (const mapping of PROJECT_MAPPINGS) {
    const note = publishedFiles.find((f) => f.filename === mapping.match);
    if (!note) continue;

    const fm = note.frontmatter;
    const ptItem = ptSummary.find((p) => p.id === mapping.id);
    const enItem = enSummary.find((p) => p.id === mapping.id);

    // Sincronização de Tier
    if (fm.tier !== undefined && fm.tier !== null) {
      const targetTier = parseInt(fm.tier, 10);
      if ([1, 2, 3].includes(targetTier)) {
        if (ptItem && ptItem.tier !== targetTier) {
          console.log(`[SYNC:TIER] ${mapping.id} (PT): ${ptItem.tier} -> ${targetTier} (de ${note.filename})`);
          ptItem.tier = targetTier;
          summaryChanged = true;
        }
        if (enItem && enItem.tier !== targetTier) {
          console.log(`[SYNC:TIER] ${mapping.id} (EN): ${enItem.tier} -> ${targetTier} (de ${note.filename})`);
          enItem.tier = targetTier;
          summaryChanged = true;
        }

        // Sincroniza também nos arquivos de detalhe (PT e EN)
        const detailPaths = [
          path.join(REPO_ROOT, `src/locales/pt/projects_details/${mapping.detailKey}.json`),
          path.join(REPO_ROOT, `src/locales/en/projects_details/${mapping.detailKey}.json`),
        ];
        for (const detailPath of detailPaths) {
          if (fs.existsSync(detailPath)) {
            try {
              const detailJson = JSON.parse(fs.readFileSync(detailPath, 'utf-8'));
              if (detailJson.tier !== targetTier) {
                console.log(`[SYNC:TIER:DETAIL] ${mapping.detailKey}: ${detailJson.tier} -> ${targetTier}`);
                detailJson.tier = targetTier;
                fs.writeFileSync(detailPath, JSON.stringify(detailJson, null, 2) + '\n', 'utf-8');
                projectFilesModified = true;
              }
            } catch (err) {
              console.warn(`[WARN] Falha ao atualizar tier em ${detailPath}:`, err.message);
            }
          }
        }
      }
    }

    // Sincronização de url_website -> liveUrl
    const targetLiveUrl = fm.url_website || fm.liveUrl;
    if (targetLiveUrl) {
      const formattedLiveUrl = targetLiveUrl.startsWith('http') ? targetLiveUrl : `https://${targetLiveUrl}`;
      if (ptItem && ptItem.liveUrl !== formattedLiveUrl) {
        console.log(`[SYNC:LIVE_URL] ${mapping.id}: ${ptItem.liveUrl} -> ${formattedLiveUrl}`);
        ptItem.liveUrl = formattedLiveUrl;
        summaryChanged = true;
      }
      if (enItem && enItem.liveUrl !== formattedLiveUrl) {
        enItem.liveUrl = formattedLiveUrl;
        summaryChanged = true;
      }
    }

    // Sincronização de github -> githubUrl
    const targetGithub = fm.github || fm.githubUrl;
    if (targetGithub) {
      if (ptItem && ptItem.githubUrl !== targetGithub) {
        console.log(`[SYNC:GITHUB] ${mapping.id}: ${ptItem.githubUrl} -> ${targetGithub}`);
        ptItem.githubUrl = targetGithub;
        summaryChanged = true;
      }
      if (enItem && enItem.githubUrl !== targetGithub) {
        enItem.githubUrl = targetGithub;
        summaryChanged = true;
      }
    }
  }

  if (summaryChanged) {
    fs.writeFileSync(ptSummaryPath, JSON.stringify(ptSummary, null, 2) + '\n', 'utf-8');
    fs.writeFileSync(enSummaryPath, JSON.stringify(enSummary, null, 2) + '\n', 'utf-8');
    projectFilesModified = true;
    console.log('[SUCCESS] Arquivos projects_summary.json (PT e EN) sincronizados com sucesso.');
  }
}

syncProjectsMetadata();

// 3. Diff Check contra .sync_manifest.json
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

if (changed.length === 0 && !projectFilesModified && !isForce) {
  console.log('[INFO] Nenhuma alteração detectada nas notas publicadas nem nos arquivos sincronizados (NO_CHANGES).');
  process.exit(0);
}

if (changed.length > 0) {
  console.log(`[CIPA] Alterações detectadas em ${changed.length} arquivo(s) markdown:`);
  for (const c of changed) {
    console.log(`  - ${c.removed ? '[REMOVIDO]' : '[MODIFICADO/NOVO]'} ${c.relPath}`);
  }
}

if (isCheckOnly) {
  console.log('[INFO] Modo --check concluído com sucesso.');
  process.exit(0);
}

// 4. Validação de Integridade / Quality Gate (Vitest & Build)
console.log('[CIPA] Executando Quality Gate (npm test & build)...');
try {
  execSync('npm test', { cwd: REPO_ROOT, stdio: 'inherit' });
  execSync('npm run build', { cwd: REPO_ROOT, stdio: 'inherit' });
  console.log('[SUCCESS] Testes e build validados com sucesso!');
} catch (err) {
  console.error('[FATAL] 🚨 Andon Cord acionado: falha nos testes ou build do portfólio. Abortando.');
  process.exit(1);
}

// 5. Atualização do Manifesto
const newManifest = {
  lastSync: new Date().toISOString(),
  totalPublished: publishedFiles.length,
  files: currentHashes,
};

fs.writeFileSync(MANIFEST_PATH, JSON.stringify(newManifest, null, 2), 'utf-8');
console.log('[SUCCESS] .sync_manifest.json atualizado.');

// 6. GitOps (se habilitado)
if (isPush) {
  console.log('[CIPA] Executando GitOps commit & push...');
  try {
    execSync('git add src/locales/ .sync_manifest.json scripts/sync-content.js', { cwd: REPO_ROOT, stdio: 'inherit' });
    const status = execSync('git status --porcelain', { cwd: REPO_ROOT }).toString().trim();
    if (status) {
      execSync(`git commit -m "chore(content): sync obsidian tier and metadata updates - ${new Date().toISOString()}"`, { cwd: REPO_ROOT, stdio: 'inherit' });
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
