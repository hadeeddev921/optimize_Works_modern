"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Logo } from "./Logo";
import { Site } from "./site";

const navLinks = [
  { href: "#why", label: "Why Us" },
  { href: "#solutions", label: "Solutions" },
  { href: "#who", label: "Who We Help" },
  { href: "#guarantee", label: "Guarantee" },
] as const;

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav id="nav">
        <Link href="/" aria-label="Optimize Works home" className="nav-logo">
          <Logo variant="nav" />
        </Link>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="nav-menu-toggle__line" />
          <span className="nav-menu-toggle__line" />
          <span className="nav-menu-toggle__line" />
        </button>

        <ul className="nav-links" role="list">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href={Site.calendlyUrl}
              target="_blank"
              rel="noopener"
              className="nav-cta"
            >
              Book Assessment
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={`nav-mobile-backdrop${isMenuOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id={menuId}
        className={`nav-mobile-menu${isMenuOpen ? " open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="nav-mobile-links" role="list">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={closeMenu}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={Site.calendlyUrl}
              target="_blank"
              rel="noopener"
              className="nav-cta"
              onClick={closeMenu}
            >
              Book Assessment
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

