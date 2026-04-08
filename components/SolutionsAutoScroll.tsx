"use client";

import { useEffect } from "react";

const MOBILE_QUERY = "(max-width: 1023px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const STEP_MS = 2200;

export function SolutionsAutoScroll({ sectionId }: { sectionId: string }) {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    let timer: number | null = null;
    let step = 0;
    let inView = false;

    const mobileMq = window.matchMedia(MOBILE_QUERY);
    const reduceMq = window.matchMedia(REDUCED_MOTION_QUERY);

    const cards = () =>
      Array.from(
        section.querySelectorAll<HTMLElement>(".sol-grid-timeline .sol-card"),
      );

    const canRun = () => mobileMq.matches && !reduceMq.matches && inView;

    const tick = () => {
      if (!canRun()) return;
      const items = cards();
      if (!items.length) return;
      step = (step + 1) % items.length;
      items[step].scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const start = () => {
      if (timer !== null || !canRun()) return;
      timer = window.setInterval(tick, STEP_MS);
    };

    const stop = () => {
      if (timer === null) return;
      window.clearInterval(timer);
      timer = null;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = !!entry?.isIntersecting;
        if (canRun()) start();
        else stop();
      },
      { threshold: 0.05 },
    );

    const onStateChange = () => {
      if (canRun()) start();
      else stop();
    };

    observer.observe(section);
    mobileMq.addEventListener("change", onStateChange);
    reduceMq.addEventListener("change", onStateChange);

    return () => {
      stop();
      observer.disconnect();
      mobileMq.removeEventListener("change", onStateChange);
      reduceMq.removeEventListener("change", onStateChange);
    };
  }, [sectionId]);

  return null;
}
