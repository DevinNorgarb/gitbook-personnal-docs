import DefaultTheme from "vitepress/theme";
import * as Sentry from "@sentry/vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    const dsn = import.meta.env.VITE_SENTRY_DSN;
    if (!import.meta.env.PROD || !dsn) {
      return;
    }

    Sentry.init({
      app,
      dsn,
      sendDefaultPii: true,
      integrations: [
        Sentry.browserTracingIntegration({ router }),
        Sentry.replayIntegration(),
      ],
      tracesSampleRate: 1.0,
      tracePropagationTargets: ["localhost", /^https:\/\/docs\.f1y\.ing/],
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      enableLogs: true,
    });
  },
};
