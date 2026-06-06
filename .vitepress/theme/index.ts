import DefaultTheme from "vitepress/theme";
import * as Sentry from "@sentry/vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // VitePress SSR renders every page at build time; Sentry's Vue Router
    // integration expects vue-router and crashes during that pass.
    if (import.meta.env.SSR) {
      return;
    }

    const dsn = import.meta.env.VITE_SENTRY_DSN;
    if (!dsn) {
      return;
    }

    Sentry.init({
      app,
      dsn,
      sendDefaultPii: true,
      integrations: [
        // No router option — VitePress router is not vue-router. History API
        // navigation is still traced for client-side page changes.
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: false,
          blockAllMedia: false,
        }),
      ],
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 1.0,
      replaysOnErrorSampleRate: 1.0,
      profilesSampleRate: 1.0,
      enableLogs: true,
    });
  },
};
