"use client";

import type { CSSProperties } from "react";

const BODY_STYLE: CSSProperties = {
  margin: 0,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#000000",
  color: "#ffffff",
  fontFamily: "ui-sans-serif, system-ui, sans-serif",
};

const MAIN_STYLE: CSSProperties = {
  width: "100%",
  maxWidth: "42rem",
  padding: "5rem 1.5rem",
  textAlign: "center",
};

const LABEL_STYLE: CSSProperties = {
  margin: 0,
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
  fontSize: "0.875rem",
  fontWeight: 500,
  letterSpacing: "0.025em",
  color: "rgba(255,255,255,0.35)",
};

const HEADING_STYLE: CSSProperties = {
  margin: "0.75rem 0 0",
  fontFamily: "ui-sans-serif, system-ui, sans-serif",
  fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
  fontWeight: 700,
  lineHeight: 1.15,
  letterSpacing: "-0.025em",
  color: "#ffffff",
};

const PARAGRAPH_STYLE: CSSProperties = {
  margin: "1rem auto 0",
  maxWidth: "36rem",
  fontSize: "1.05rem",
  lineHeight: 1.625,
  color: "#ffffff",
};

const BUTTON_STYLE: CSSProperties = {
  marginTop: "1.5rem",
  border: "none",
  background: "transparent",
  color: "#ffffff",
  fontFamily: "inherit",
  fontSize: "1.05rem",
  cursor: "pointer",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
};

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={BODY_STYLE}>
        <main style={MAIN_STYLE}>
          <p style={LABEL_STYLE}>error</p>
          <h1 style={HEADING_STYLE}>something went wrong</h1>
          <p style={PARAGRAPH_STYLE}>
            Blackboard ran into an unexpected error. Please try again.
          </p>
          <button type="button" onClick={reset} style={BUTTON_STYLE}>
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
