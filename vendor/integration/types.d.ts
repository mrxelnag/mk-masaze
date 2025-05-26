declare module 'jpconfig:config' {
  import type { SiteConfig, MetaDataConfig, UIConfig, AnalyticsConfig } from './config';

  export const SITE: SiteConfig;
  export const METADATA: MetaDataConfig;
  export const UI: UIConfig;
  export const ANALYTICS: AnalyticsConfig;
}
