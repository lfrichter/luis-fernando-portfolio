import { test, expect } from '@playwright/test';

test.describe('ImobFlow Landing Page E2E Tests', () => {
  test('should render ImobFlow landing page, verify core sections, and navigate back to portfolio', async ({ page }) => {
    // 1. Open /imobflow
    await page.goto('/imobflow');

    // 2. Verify Page Title & SEO Metadata
    await expect(page).toHaveTitle(/ImobFlow/i);

    // 3. Verify Hero Section & Headline
    await expect(
      page.getByRole('heading', { level: 1, name: /Seu próximo atendimento começa antes do corretor/i })
    ).toBeVisible();
    await expect(page.getByText('⚡ Atendimento em segundos')).toBeVisible();

    // 4. Verify Pain Points section
    await expect(page.getByText('Lead Esperando')).toBeVisible();
    await expect(page.getByText('Contexto Perdido')).toBeVisible();
    await expect(page.getByText('Oportunidade Perdida')).toBeVisible();

    // 5. Verify How It Works section
    await expect(page.getByText('Como a ImobFlow conduz cada conversa')).toBeVisible();

    // 6. Verify Visual Proof section with Reserva Campolim
    await expect(page.getByText('Reserva Campolim').first()).toBeVisible();

    // 7. Verify Deterministic rules technical differentiator
    await expect(
      page.getByRole('heading', { name: /As regras determinísticas protegem a operação/i })
    ).toBeVisible();

    // 8. Verify CTA section & WhatsApp button
    await expect(page.getByText('Falar pelo WhatsApp')).toBeVisible();

    // 9. Click "Portfólio Richter" link in navbar to navigate back
    const backBtn = page.getByText('Portfólio Richter');
    await backBtn.click();

    // Verify returning to portfolio
    await expect(page.getByText('Luis Fernando Richter').first()).toBeVisible();
  });
});
