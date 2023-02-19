import { describe } from "vitest";
import { expect } from "@playwright/test";

import { it } from "./fixture";

describe.concurrent("Sign in without a captcha", () => {
    it("should redirect to the index page of the portal app after the user signs in successfully", async ({ env, page }) => {
        console.info("before goto");
        await page.goto("https://app.ntut.edu.tw/index.do");
        console.info("after goto");

        console.info("before fill");
        await page.locator("#student-id").fill(env.studentID);
        await page.locator("#password").fill(env.password);
        console.info("after fill");

        console.info("before click");
        await page.getByRole("button",  { name: "登入" }).click();
        console.info("after click");

        console.info("before redirect");
        await page.waitForURL("https://app.ntut.edu.tw/myPortal.do*");
        console.info("after redirect");

        const portalAppUrlRegex = new RegExp("^https://app\.ntut\.edu\.tw/myPortal\.do.*$");

        expect(page.url()).toMatch(portalAppUrlRegex);
    });

    it("should redirect to the error page when the user enters an invalid student ID", async ({ env, page }) => {
        await page.goto("https://app.ntut.edu.tw/index.do");

        await page.locator("#student-id").fill("a");
        await page.locator("#password").fill(env.password);

        await page.getByRole("button",  { name: "登入" }).click();
        await page.waitForURL("https://app.ntut.edu.tw/login.do");

        expect(page.url()).toBe("https://app.ntut.edu.tw/login.do");
        expect(await page.locator("h3").first().innerText()).toBe("登入失敗！");

        const button = page.locator("input");
        expect(await button.getAttribute("type")).toBe("button");
        expect(await button.inputValue()).toBe("重新登入");
    });

    it("should redirect to the error page when the user enters a invalid password", async ({ env, page }) => {
        await page.goto("https://app.ntut.edu.tw/index.do");

        await page.locator("#student-id").fill(env.studentID);
        await page.locator("#password").fill("a");

        await page.getByRole("button",  { name: "登入" }).click();
        await page.waitForURL("https://app.ntut.edu.tw/login.do");

        expect(page.url()).toBe("https://app.ntut.edu.tw/login.do");
        expect(await page.locator("h3").first().innerText()).toBe("登入失敗！");

        const button = page.locator("input");
        expect(await button.getAttribute("type")).toBe("button");
        expect(await button.inputValue()).toBe("重新登入");
    });
});