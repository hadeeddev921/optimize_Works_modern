import Link from "next/link";
import { Logo } from "./Logo";
import { Site } from "./site";

const navLinks = [
  { href: "#why", label: "Why Us" },
  { href: "#solutions", label: "Solutions" },
  { href: "#who", label: "Who We Help" },
  { href: "#guarantee", label: "Guarantee" },
] as const;

export function Nav() {
  return (
    <nav id="nav">
      <Link href="/" aria-label="Optimize Works home" className="nav-logo">
        <Logo variant="nav" />
      </Link>

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
  );
}

