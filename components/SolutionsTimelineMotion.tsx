"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type DotStep = {
  left: string;
  top?: string;
  bottom?: string;
  borderColor: string;
  boxShadow: string;
};

const STEP_MS = 2200;

const desktopSteps: DotStep[] = [
  {
    left: "12.5%",
    bottom: "26px",
    borderColor: "rgba(58,159,232,0.88)",
    boxShadow: "0 0 0 2px rgba(58,159,232,0.12)",
  },
  {
    left: "37.5%",
    bottom: "26px",
    borderColor: "rgba(40,200,128,0.9)",
    boxShadow: "0 0 0 2px rgba(40,200,128,0.12)",
  },
  {
    left: "62.5%",
    bottom: "26px",
    borderColor: "rgba(167,139,250,0.9)",
    boxShadow: "0 0 0 2px rgba(167,139,250,0.12)",
  },
  {
    left: "87.5%",
    bottom: "26px",
    borderColor: "rgba(245,158,11,0.92)",
    boxShadow: "0 0 0 2px rgba(245,158,11,0.12)",
  },
];

const mobileSteps = (compact: boolean): DotStep[] => {
  const left = compact ? "12px" : "50%";
  return [
    {
      left,
      top: "12%",
      borderColor: "rgba(58,159,232,0.88)",
      boxShadow: "0 0 0 2px rgba(58,159,232,0.12)",
    },
    {
      left,
      top: "35%",
      borderColor: "rgba(40,200,128,0.9)",
      boxShadow: "0 0 0 2px rgba(40,200,128,0.12)",
    },
    {
      left,
      top: "58%",
      borderColor: "rgba(167,139,250,0.9)",
      boxShadow: "0 0 0 2px rgba(167,139,250,0.12)",
    },
    {
      left,
      top: "80%",
      borderColor: "rgba(245,158,11,0.92)",
      boxShadow: "0 0 0 2px rgba(245,158,11,0.12)",
    },
  ];
};

export function SolutionsTimelineMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [width, setWidth] = useState(1440);
  const dotRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const timeline = dotRef.current?.closest(".sol-grid-timeline") as HTMLElement | null;
    if (!timeline) return;
    timeline.dataset.activeStep = String(step + 1);
    return () => {
      delete timeline.dataset.activeStep;
    };
  }, [step]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  const isDesktop = width >= 1024;
  const isCompactMobile = width <= 640;
  const steps = useMemo(
    () => (isDesktop ? desktopSteps : mobileSteps(isCompactMobile)),
    [isCompactMobile, isDesktop],
  );
  const current = steps[step] ?? steps[0];

  if (prefersReducedMotion) return null;

  return (
    <motion.span
      aria-hidden="true"
      className="sol-motion-dot"
      ref={dotRef}
      initial={false}
      animate={current}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  );
}
