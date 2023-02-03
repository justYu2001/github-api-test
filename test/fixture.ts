import { test as base } from "vitest-fixture";
import { resolve } from "path";
import { chromium } from "playwright";
import type { BrowserContext, Page } from "playwright";
import userEvent from "@testing-library/user-event";

interface TestFixtures {
    browser: BrowserContext;
    page: Page;
    user: ReturnType<typeof userEvent.setup>;
}

export const test = base.extend<TestFixtures>({
    browser: async ({}, use) => {
        const pathToExtension = resolve(__dirname, "../dist");

        const browser = await chromium.launchPersistentContext("", {
            headless: false,
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`,
            ],
        });

        await use(browser, async () => {
            browser.close();
        });
    },
    page: async ({ browser }, use) => {
        const page = await browser.newPage();
        await use(page);
    },
    user: async ({}, use) => {
        const user = userEvent.setup();
        await use(user);
    },
});