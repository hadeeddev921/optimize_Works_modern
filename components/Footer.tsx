import Link from "next/link";
import { Logo } from "./Logo";
import { PrivacyPolicyModalLink } from "./PrivacyPolicyModalLink";
import { Site } from "./site";

export function Footer() {
  return (
    <>
      <footer role="contentinfo">
        <Link href="/" aria-label="Optimize Works home" className="footer-logo">
          <Logo variant="footer" />
        </Link>

        <p className="footer-meta">
          <strong>Optimize Works Ltd.</strong> &mdash; Registered in England &amp;
          Wales &middot; No. 16593933
        </p>

        <ul className="footer-nav" role="list">
          <li>
            <PrivacyPolicyModalLink />
          </li>
          <li>
            <a href={`mailto:${Site.email}`}>Contact</a>
          </li>
        </ul>
      </footer>
      <p className="vat">{Site.vatLine}</p>
    </>
  );
}

