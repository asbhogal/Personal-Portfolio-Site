import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("homepage", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules("region") // flags issues with loading div inside footer which isn't inside main landmark (compliant)
      .exclude(".HireCTAHeader") // disabled - falsely flags issues with background-foreground color ratios (compliant)
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("about", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/about");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules("region")
      .exclude(".HireCTAHeader")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("portfolio", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/portfolio");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules("region")
      .exclude(".HireCTAHeader")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("additional services", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/additional-services");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules("region")
      .exclude(".HireCTAHeader")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("free resources", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/free-resources");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules("region")
      .exclude(".HireCTAHeader")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("testimonials", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/testimonials");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules("region")
      .exclude(".HireCTAHeader")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
