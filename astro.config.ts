// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import jpconfig from "./vendor/integration";

import icon from "astro-icon";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [tailwindcss()],
  },
  integrations: [
    jpconfig({
      config: "./src/config.yaml",
    }),
    icon({
      iconDir: "src/assets/icons",
      include: {
        "material-symbols-light": ["*"]
      }
    }),
  ],
});
