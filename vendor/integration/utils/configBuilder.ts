import merge from "lodash.merge";

import type { MetaData } from "~/types.d.ts";

export type Config = {
  site?: SiteConfig;
  metadata?: MetaDataConfig;
  ui?: unknown;
  analytics?: unknown;
};

export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean;
  googleSiteVerificationId?: string;
}
export interface MetaDataConfig extends Omit<MetaData, "title"> {
  title?: {
    default: string;
    template: string;
  };
}

export interface AnalyticsConfig {
  vendors: {
    googleAnalytics: {
      id?: string;
      partytown?: boolean;
    };
  };
}

export interface UIConfig {
  theme: string;
}

const DEFAULT_SITE_NAME = "Website";

const getSite = (config: Config) => {
  const _default = {
    name: DEFAULT_SITE_NAME,
    site: undefined,
    base: "/",
    trailingSlash: false,

    googleSiteVerificationId: "",
  };

  return merge({}, _default, config?.site ?? {}) as SiteConfig;
};

const getMetadata = (config: Config) => {
  const siteConfig = getSite(config);

  const _default = {
    title: {
      default: siteConfig?.name || DEFAULT_SITE_NAME,
      template: "%s",
    },
    description: "",
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      type: "website",
    },
  };

  return merge({}, _default, config?.metadata ?? {}) as MetaDataConfig;
};

const getUI = (config: Config) => {
  const _default = {
    theme: "system",
  };

  return merge({}, _default, config?.ui ?? {});
};

const getAnalytics = (config: Config) => {
  const _default = {
    vendors: {
      googleAnalytics: {
        id: undefined,
        partytown: true,
      },
    },
  };

  return merge({}, _default, config?.analytics ?? {}) as AnalyticsConfig;
};

export default (config: Config) => ({
  SITE: getSite(config),
  METADATA: getMetadata(config),
  UI: getUI(config),
  ANALYTICS: getAnalytics(config),
});
