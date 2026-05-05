"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Keep a console trail for runtime diagnostics in production.
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#f8faff",
          color: "#0f172a",
        }}
      >
        <main
          style={{
            maxWidth: 520,
            padding: "24px",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 12,
            background: "#fff",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <h1 style={{ marginTop: 0, marginBottom: 8, fontSize: "1.4rem" }}>
            Something went wrong
          </h1>
          <p style={{ marginTop: 0, marginBottom: 16, lineHeight: 1.6 }}>
            An unexpected error occurred while loading this page.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              border: 0,
              borderRadius: 8,
              background: "#1a6fd4",
              color: "#fff",
              padding: "10px 14px",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
