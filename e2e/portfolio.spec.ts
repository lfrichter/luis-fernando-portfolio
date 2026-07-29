import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  test('should render main portfolio sections, navigate tabs, open lazy project modal, and toggle theme', async ({ page }) => {
    await page.goto('/');

    // 1. Verify Title & Hero Section
    await expect(page).toHaveTitle(/Luis Fernando Richter/i);
    await expect(page.getByText('Luis Fernando Richter').first()).toBeVisible();
    await expect(page.getByText('Senior Software Developer | Tech Lead | Solutions Architect').first()).toBeVisible();

    // 2. Verify Tab Navigation (Projects default)
    await expect(page.getByText('Projetos de Destaque')).toBeVisible();
    await expect(page.getByText('Ask Richter')).toBeVisible();

    // Switch to Experience Tab
    const expTab = page.getByRole('button', { name: /Experiência/i });
    await expTab.click();
    await expect(page.getByText('Turno (anteriormente TurnoverBnB)')).toBeVisible();

    // Switch to Skills Tab
    const skillsTab = page.getByRole('button', { name: /Skills/i });
    await skillsTab.click();
    await expect(page.getByText(/AI-Assisted Development & AI Engineering/i)).toBeVisible();

    // Switch to Education Tab
    const eduTab = page.getByRole('button', { name: /Formação/i });
    await eduTab.click();
    await expect(page.getByText(/UNIBTA Centro Universitário/i)).toBeVisible();

    // 3. Switch back to Projects and open Lazy ProjectModal
    const projectsTab = page.getByRole('button', { name: /Projetos/i });
    await projectsTab.click();

    const detailBtn = page.getByRole('button', { name: /Ver Detalhes Arquiteturais/i }).first();
    await detailBtn.click();

    // Verify Modal Dialog appeared with loaded detail
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(page.getByText(/Visão Geral & Arquitetura/i)).toBeVisible();

    // Close Modal Dialog
    const closeBtn = page.getByRole('button', { name: /Fechar modal/i });
    await closeBtn.click();
    await expect(dialog).not.toBeVisible();

    // 4. Verify Theme Toggle
    const themeBtn = page.getByRole('button', { name: /toggle theme/i });
    await expect(themeBtn).toBeVisible();

    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');
    await themeBtn.click();
    const toggledClass = await html.getAttribute('class');
    expect(toggledClass).not.toBe(initialClass);
  });
});
