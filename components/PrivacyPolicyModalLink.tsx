"use client";

import { useEffect, useState } from "react";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export function PrivacyPolicyModalLink() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="footer-link-button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        Privacy Policy
      </button>

      {isOpen ? (
        <div
          className="modal-wrap open"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          onClick={() => setIsOpen(false)}
        >
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="modal-x"
              onClick={() => setIsOpen(false)}
              aria-label="Close Privacy Policy"
            >
              x
            </button>
            <PrivacyPolicyContent titleId="privacy-modal-title" />
          </div>
        </div>
      ) : null}
    </>
  );
}
