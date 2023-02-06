import { describe, it, expect } from "vitest";
import dotenv from "dotenv";

describe.concurrent("t", () => {
    it("1 + 1 = 2", () => {
        expect(1 + 1).toBe(2);
    });

    it("2 + 1 = 3", () => {
        expect(2 + 1).toBe(3);
    });

    it("env test", () => {
        dotenv.config();

        expect(process.env.test).toBe("123");
    })
});