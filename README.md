# MK Masáže Website

This is the repository for the MK Masáže website.

## Metadata System

The website uses a metadata system for SEO optimization. Here's how to use it:

### Global Configuration

The global configuration is stored in `config.yaml` in the root directory. This file contains:

- Site information (name, URL, default phone, etc.)
- Default SEO metadata (title, description, robots, OpenGraph, Twitter, keywords)
- Analytics configuration
- UI preferences

Example:

```yaml
site:
  name: MK Masáže
  site: "https://mk-masaze.cz"
  defaultPhone: "+420 123 456 789"
  base: "/"
  trailingSlash: true

metadata:
  title:
    default: MK Masáže
    template: "%s — MK Masáže"
  description: "MK Masáže nabízí profesionální masážní služby..."
  robots:
    index: true
    follow: true
  openGraph:
    site_name: MK Masáže
    images:
      - url: "~/assets/images/default-og-image.jpg"
        width: 1200
        height: 628
    type: website
  keywords: ["masáže", "relaxace", "regenerace"]

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: "system"
```

### Page-Specific Metadata

Each page can override the default metadata by providing a `metadata` object:

```astro
---
import Layout from "../layouts/Layout.astro";
import type { MetaData } from "~/types";

const metadata: MetaData = {
  title: "Domů | Masáže",
  description: "Vítejte na stránkách MK Masáže...",
  openGraph: {
    title: "Domů | MK Masáže",
    description: "Vítejte na stránkách MK Masáže...",
    type: "website",
  },
};
---

<Layout metadata={metadata}>
  <!-- Page content -->
</Layout>
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
