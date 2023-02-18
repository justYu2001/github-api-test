import { render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";

import PortalLoginForm from "./PortalLoginForm";
import { it } from "tests/fixture";
import { renderWithI18next } from "tests/i18n";

describe("Portal Login Form", () => {
    it("the login button should be disabled when all inputs are empty", () => {
        render(<PortalLoginForm />);

        expect(screen.getByRole("button")).toBeDisabled();
    });

    it("the login button should be disabled when the password input is empty", async ({ user }) => {
        const { container } = render(<PortalLoginForm />);

        const studentIDInput = container.querySelector("#student-id") as HTMLInputElement;
        await user.type(studentIDInput, "a");

        expect(screen.getByRole("button")).toBeDisabled();
    });

    it("the login button should be disabled when the student id input is empty", async ({ user }) => {
        const { container } = render(<PortalLoginForm />);

        const passwordInput = container.querySelector("#password") as HTMLInputElement;
        await user.type(passwordInput, "a");

        expect(screen.getByRole("button")).toBeDisabled();
    });

    it("the login button should be enabled when the login form is finished", async ({ user }) => {
        const { container } = render(<PortalLoginForm />);

        const studentIDInput = container.querySelector("#student-id") as HTMLInputElement;
        await user.type(studentIDInput, "a");

        const passwordInput = container.querySelector("#password") as HTMLInputElement;
        await user.type(passwordInput, "a");

        expect(screen.getByRole("button")).not.toBeDisabled();
    });

    it("the login button should be disabled after clicking", async ({ user }) => {
        const { container } = render(<PortalLoginForm />);

        const studentIDInput = container.querySelector("#student-id") as HTMLInputElement;
        await user.type(studentIDInput, "a");

        const passwordInput = container.querySelector("#password") as HTMLInputElement;
        await user.type(passwordInput, "a");

        const onSubmit = vi.fn((event: Event) => event.preventDefault());

        const form = container.querySelector("form") as HTMLFormElement;
        form.onsubmit = onSubmit;

        const loginButton = screen.getByRole("button");
        await user.click(loginButton);

        expect(loginButton).toBeDisabled();
        expect(onSubmit).toHaveBeenCalled();
    });

    it("the login button should be disabled after pressing the enter key", async ({ user }) => {
        const { container } = render(<PortalLoginForm />);

        const studentIDInput = container.querySelector("#student-id") as HTMLInputElement;
        await user.type(studentIDInput, "a");

        const passwordInput = container.querySelector("#password") as HTMLInputElement;
        await user.type(passwordInput, "a");

        const loginButton = screen.getByRole("button");

        const onSubmit = vi.fn((event: Event) => event.preventDefault());

        const form = container.querySelector("form") as HTMLFormElement;
        form.onsubmit = onSubmit;

        await user.keyboard("{Enter}");

        expect(loginButton).toBeDisabled();
        expect(onSubmit).toHaveBeenCalled();
    });

    it("chinese localization", async () => {
        const { container } = await renderWithI18next(<PortalLoginForm />, "zh");

        const studentIDLabel = container.querySelector("label[for='student-id']") as HTMLLabelElement;
        expect(studentIDLabel.textContent).toBe("學號");

        const passwordLabel = container.querySelector("label[for='password']") as HTMLLabelElement;
        expect(passwordLabel.textContent).toBe("密碼");

        const passwordRecoveryLink = screen.getByRole("link");
        expect(passwordRecoveryLink.textContent).toBe("忘記密碼？");
        expect(passwordRecoveryLink.getAttribute("href")).toBe("https://cnc.ntut.edu.tw/p/404-1004-3890.php?Lang=zh-tw");

        expect(screen.getByRole("button").textContent).toBe("登入");
    });

    it("english localization", async () => {
        const { container } = await renderWithI18next(<PortalLoginForm />, "en");

        const studentIDLabel = container.querySelector("label[for='student-id']") as HTMLLabelElement;
        expect(studentIDLabel.textContent).toBe("Student ID");

        const passwordLabel = container.querySelector("label[for='password']") as HTMLLabelElement;
        expect(passwordLabel.textContent).toBe("Password");

        const passwordRecoveryLink = screen.getByRole("link");
        expect(passwordRecoveryLink.textContent).toBe("Forgot password?");
        expect(passwordRecoveryLink.getAttribute("href")).toBe("https://cnc.ntut.edu.tw/p/405-1004-78726,c12303.php?Lang=en#q1");

        expect(screen.getByRole("button").textContent).toBe("Log In");
    });

    it("unsupported language localization", async () => {
        const { container } = await renderWithI18next(<PortalLoginForm />, "de");

        const studentIDLabel = container.querySelector("label[for='student-id']") as HTMLLabelElement;
        expect(studentIDLabel.textContent).toBe("Student ID");

        const passwordLabel = container.querySelector("label[for='password']") as HTMLLabelElement;
        expect(passwordLabel.textContent).toBe("Password");

        const passwordRecoveryLink = screen.getByRole("link");
        expect(passwordRecoveryLink.textContent).toBe("Forgot password?");
        expect(passwordRecoveryLink.getAttribute("href")).toBe("https://cnc.ntut.edu.tw/p/405-1004-78726,c12303.php?Lang=en#q1");

        expect(screen.getByRole("button").textContent).toBe("Log In");
    });
});