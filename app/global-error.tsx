"use client";

import type { CSSProperties } from "react";

const BODY_STYLE: CSSProperties = {
  margin: 0,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "system-ui, sans-serif",
  background: "#0f0f0f",
  color: "#f2f2f2",
};

const MAIN_STYLE: CSSProperties = {
  maxWidth: "28rem",
  padding: "1.5rem",
  textAlign: "center",
};

const HEADING_STYLE: CSSProperties = {
  fontSize: "2rem",
  fontWeight: 500,
  marginBottom: "0.75rem",
};

const PARAGRAPH_STYLE: CSSProperties = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.6,
  marginBottom: "1.5rem",
};

const BUTTON_STYLE: CSSProperties = {
  border: "1px solid rgba(255,255,255,0.22)",
  borderRadius: "9999px",
  background: "#1a1a1a",
  color: "#f2f2f2",
  padding: "0.5rem 1rem",
  cursor: "pointer",
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
          <h1 style={HEADING_STYLE}>
            Something went wrong
          </h1>
          <p style={PARAGRAPH_STYLE}>
            CampusOS ran into an unexpected error. Please try again.
          </p>
          <button
            type="button"
            onClick={reset}
            style={BUTTON_STYLE}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
