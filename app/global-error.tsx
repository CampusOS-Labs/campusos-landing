"use client";

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#ffffff",
          color: "#000000",
        }}
      >
        <main style={{ maxWidth: "28rem", padding: "1.5rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 500, marginBottom: "0.75rem" }}>
            Something went wrong
          </h1>
          <p style={{ color: "rgba(0,0,0,0.55)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            CampusOS ran into an unexpected error. Please try again.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: "9999px",
              background: "#fff",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
