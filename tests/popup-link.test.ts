import { describe, expect } from "vitest";

import { it } from "./fixture";

describe("e2e-testing for popup link", () => {
    it("NTUT Portal Link", async ({ browser, popupPage }) => {
        const pagePromise = browser.waitForEvent("page");

        await popupPage.getByText("北科入口網站").click();

        const newPage = await pagePromise;
        await newPage.waitForLoadState();

        expect(newPage.url()).toBe("https://app.ntut.edu.tw/index.do");
    });

    it("Source Code Link", async ({ browser, popupPage }) => {
        const pagePromise = browser.waitForEvent("page");

        await popupPage.getByText("專案連結").click();

        const newPage = await pagePromise;
        await newPage.waitForLoadState();

        expect(newPage.url()).toBe("https://github.com/justYu2001/NTUT-Enhancer");
    });
});