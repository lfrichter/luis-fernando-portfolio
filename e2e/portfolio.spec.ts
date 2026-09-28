import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E & i18n Tests', () => {
  test('should render portfolio, navigate tabs, toggle language between PT and EN, and open project modal', async ({ page }) => {
    await page.goto('/');

    // 1. Verify Title & Hero Section
    await expect(page).toHaveTitle(/Luis Fernando Richter/i);
    await expect(page.getByText('Luis Fernando Richter').first()).toBeVisible();

    // 2. Verify i18n Language Toggle (Clicking PT/EN changes title)
    const langBtn = page.getByRole('button', { name: /toggle language/i });
    await expect(langBtn).toBeVisible();

    // Switch tab to Experience
    const expTab = page.getByRole('button', { name: /Experiência|Experience/i });
    await expTab.click();

    // Check header text in active language
    const langText = await langBtn.textContent();
    if (langText?.includes('PT')) {
      await expect(page.getByText(/Experiência Profissional/i)).toBeVisible();
      // Click to switch to English
      await langBtn.click();
      await expect(page.getByText(/Professional Experience/i)).toBeVisible();
    } else {
      await expect(page.getByText(/Professional Experience/i)).toBeVisible();
      // Click to switch to Portuguese
      await langBtn.click();
      await expect(page.getByText(/Experiência Profissional/i)).toBeVisible();
    }

    // 3. Switch back to Projects tab and open Lazy ProjectModal
    const projectsTab = page.getByRole('button', { name: /^Projetos & Destaques|^Projects & Highlights/i });
    await projectsTab.click();

    const detailBtn = page.getByRole('button', { name: /Especificações|Specs|Detalhes|Details/i }).first();
    await detailBtn.click();

    // Verify Modal Dialog appeared with loaded detail
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Close Modal Dialog
    const closeBtn = page.getByRole('button', { name: /Fechar|Close/i });
    await closeBtn.click();
    await expect(dialog).not.toBeVisible();

    // 4. Verify Posts tab navigation
    const postsTab = page.getByRole('button', { name: /Posts & Artigos|Posts & Articles/i });
    await postsTab.click();
    await expect(page.getByText(/Posts & Artigos Técnicos|Technical Posts & Articles/i)).toBeVisible();
    await expect(page.getByText(/Project Cat Guardian/i)).toBeVisible();

    // 5. Verify Theme Toggle
    const themeBtn = page.getByRole('button', { name: /toggle theme/i });
    await expect(themeBtn).toBeVisible();
  });

  test('should filter projects using Career Era tabs (AI & Cloud, Scaling 2016-2020, Legacy)', async ({ page }) => {
    await page.goto('/');

    const projectsTab = page.getByRole('button', { name: /^Projetos & Destaques|^Projects & Highlights/i });
    await projectsTab.click();

    // Verify default view displays all projects
    await expect(page.getByText('Ask Richter').first()).toBeVisible();

    // Click 2016-2020 scaling era button
    const scalingBtn = page.getByRole('button', { name: /2016 – 2020/i });
    await scalingBtn.click();

    // 2016-2020 projects should be visible
    await expect(page.getByText(/Índicos/i).first()).toBeVisible();
    await expect(page.getByText(/ASO/i).first()).toBeVisible();
    await expect(page.getByText(/Startup Center/i).first()).toBeVisible();

    // Modern projects should not be visible
    await expect(page.getByText('Ask Richter')).not.toBeVisible();

    // Click Legacy era button
    const legacyBtn = page.getByRole('button', { name: /Pré-2015|Pre-2015/i });
    await legacyBtn.click();

    // Pre-2015 FTD project should be visible
    await expect(page.getByText(/FTD — Gestão de Acessos/i).first()).toBeVisible();
    await expect(page.getByText(/Índicos/i)).not.toBeVisible();
  });
});
