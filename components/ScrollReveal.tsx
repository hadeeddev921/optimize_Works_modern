"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".sr"));
    if (!els.length) return;

    const reveal = (el: HTMLElement) => {
      el.classList.add("in");
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) reveal(e.target as HTMLElement);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px 12% 0px" },
    );

    for (const el of els) {
      io.observe(el);
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        reveal(el);
      }
    }

    const id = window.requestAnimationFrame(() => {
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          reveal(el);
        }
      }
    });

    return () => {
      window.cancelAnimationFrame(id);
      io.disconnect();
    };
  }, []);

  return null;
}

