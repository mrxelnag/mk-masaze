// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import jpconfig from "./vendor/integration";
import compress from "astro-compress"
import sitemap from "@astrojs/sitemap";

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
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'client-router': ['@astrojs/router']
          }
        }
      }
    },
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    jpconfig({
      config: "./src/config.yaml",
    }),
    icon({
      iconDir: "src/assets/icons",
      include: {
        "material-symbols-light": ["massage-outline", "clean-hands-outline", "water-drop-outline", "cleaning-bucket-outline", "avg-time-outline-rounded","map", "call", "mail", "calendar-clock-outline-rounded"]
      }
    }),
  ],
});
