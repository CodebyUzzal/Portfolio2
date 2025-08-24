import { test, expect } from '@playwright/test';

test('navigation and projects', async ({ page }) => {
  await page.goto('/');
  await page.click('text=View Projects');
  await expect(page).toHaveURL('/projects');
  await expect(page.getByTestId('project-card')).toHaveCount(4);
});
