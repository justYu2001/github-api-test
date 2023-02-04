import { render, screen } from "@testing-library/react";
import { describe } from "vitest";

import { test } from "test/fixture";

import Counter from "./Counter";

describe("Counter Component", () => {
    test("initial value should be 0", () => {
        render(<Counter />);

        expect(screen.getByRole("heading").textContent).toBe("0");
    });

    test("increase", async ({ user }) => {
        render(<Counter />);

        const button = screen.getByText("+");
        await user.click(button);

        expect(screen.getByRole("heading").textContent).toBe("1");
    });

    test("minus", async ({ user }) => {
        render(<Counter />);

        const addButton = screen.getByText("+");
        await user.click(addButton);

        const minusButton = screen.getByText("-");
        await user.click(minusButton);

        expect(screen.getByRole("heading").textContent).toBe("0");
    });
});