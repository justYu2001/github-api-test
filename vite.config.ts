import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { crx } from "@crxjs/vite-plugin";

import manifest from "./mainfest.json";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    plugins: [
        react(),
        crx({ manifest }),
    ],
});
