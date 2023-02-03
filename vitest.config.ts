import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
    test: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
        deps: {
            inline: ["vitest-fixture"],
        },
        testTimeout: 60_000,
        globals: true,
        environment: "jsdom",
        setupFiles: "./test/setup.ts",
    },
});
