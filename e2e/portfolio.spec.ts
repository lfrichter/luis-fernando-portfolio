import { test, expect } from '@playwright/test'

test.describe('Portfolio E2E Tests', () => {
  test('should render main portfolio sections and toggle theme', async ({ page }) => {
    await page.goto('/')

    // Verify Title and Header
    await expect(page).toHaveTitle(/Luis Fernando Richter/i)
    await expect(page.getByText('Luis Fernando Richter').first()).toBeVisible()

    // Verify Section Headers
    await expect(page.getByText('Professional Experience')).toBeVisible()
    await expect(page.getByText('Skills & Architectural Domains')).toBeVisible()
    await expect(page.getByText('Featured Engineering Projects')).toBeVisible()

    // Verify Theme Toggle Interaction
    const themeBtn = page.getByRole('button', { name: /toggle theme/i })
    await expect(themeBtn).toBeVisible()

    const html = page.locator('html')
    const initialClass = await html.getAttribute('class')

    await themeBtn.click()
    const toggledClass = await html.getAttribute('class')
    expect(toggledClass).not.toBe(initialClass)
  })
})
