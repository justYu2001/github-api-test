import { describe } from "vitest";
import { expect } from "@playwright/test";

import { test } from "./fixture";

describe.concurrent("end-to-end testing for redirecting to the app portal", () => {
    test("user should be redirected to app portal when at https://nportal.ntut.edu.tw", async ({ page }) => {
        await page.goto("https://nportal.ntut.edu.tw");
        expect(page.url()).toBe("https://app.ntut.edu.tw/index.do");
    });

    test("user should be redirected to app portal when at https://nportal.ntut.edu.tw/index.do", async ({ page }) => {
        await page.goto("https://nportal.ntut.edu.tw/index.do");
        expect(page.url()).toBe("https://app.ntut.edu.tw/index.do");
    });

    test("user should be redirected to app portal when at https://nportal.ntut.edu.tw/index.do with url parameter", async ({
        page,
    }) => {
        await page.goto(
            "https://nportal.ntut.edu.tw/index.do?thetime=1674484238122"
        );
        expect(page.url()).toBe("https://app.ntut.edu.tw/index.do");
    });

    test("user should be redirected to the app portal when entering the web portal via Google search", async ({
        page,
    }) => {
        await page.goto("https://www.google.com");
        await page.locator("input").first().fill("北科入口");
        await page.keyboard.down("Enter");
        await page.locator("a[href='https://nportal.ntut.edu.tw/']").click();
        await page.waitForLoadState("networkidle");
        expect(page.url()).toBe("https://app.ntut.edu.tw/index.do");
    });
});
