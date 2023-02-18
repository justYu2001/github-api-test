import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react()],
    test: {
        alias: {
            "@": __dirname,
        },
        deps: {
            inline: ["vitest-fixture"],
        },
        testTimeout: 90_000,
        globals: true,
        environment: "jsdom",
        setupFiles: "./tests/setup.ts",
    },
});
