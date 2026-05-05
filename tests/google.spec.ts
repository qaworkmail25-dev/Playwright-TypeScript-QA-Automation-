import { test, expect } from "@playwright/test";

test("should display correct title on Google homepage", async ({ page }) => {
  // Arrange
  await page.goto("https://www.google.com");

  // Act
  // (немає явної дії)

  // Assert
  await expect(page).toHaveTitle(/Google/);
});

test("should have search input visible", async ({ page }) => {
  await page.goto("https://www.google.com");

  const searchInput = page.locator('textarea[name="q"]');
  await expect(searchInput).toBeVisible();
});
