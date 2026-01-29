import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

Sentry.init({
  dsn: "https://437b40aad4cc8f75cb8c2c6216283934@o4510725854003200.ingest.us.sentry.io/4510725880020993",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  
  // Privacy
  sendDefaultPii: true,
});

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
