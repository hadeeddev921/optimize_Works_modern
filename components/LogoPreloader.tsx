"use client";

import { useEffect, useState } from "react";

const PRELOADER_MS = 1900;

export function LogoPreloader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const hideId = window.setTimeout(() => setHiding(true), PRELOADER_MS);
    return () => window.clearTimeout(hideId);
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
      <img
        className="logo-preloader__logo"
        src="/Clean-Logo-removebg-preview.png"
        alt=""
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
