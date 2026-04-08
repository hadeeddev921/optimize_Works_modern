"use client";

import { useEffect, useState } from "react";

const PRELOADER_MS = 1900;

export function LogoPreloader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hideId = window.setTimeout(() => setHiding(true), PRELOADER_MS);
    return () => window.clearTimeout(hideId);
  }, []);

  useEffect(() => {
    const startedAt = performance.now();
    const tickId = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const next = Math.min(100, Math.round((elapsed / PRELOADER_MS) * 100));
      setProgress(next);
      if (next >= 100) {
        window.clearInterval(tickId);
      }
    }, 24);

    return () => window.clearInterval(tickId);
  }, []);

  useEffect(() => {
    if (!hiding) return;
    const doneId = window.setTimeout(() => setVisible(false), 380);
    return () => window.clearTimeout(doneId);
  }, [hiding]);

  if (!visible) return null;

  return (
    <div className={`logo-preloader${hiding ? " is-hiding" : ""}`} aria-hidden="true">
      <div className="logo-preloader__halo" />
      <div className="logo-preloader__content">
        <img
          className="logo-preloader__logo"
          src="/optimizeworks-logo.png"
          alt=""
          loading="eager"
          decoding="async"
        />
        <div
          className="logo-preloader__progress"
          role="progressbar"
          aria-label="Loading page"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <span className="logo-preloader__progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
