import { Site } from "@/components/site";

export default function GuaranteePage() {
  return (
    <section id="guarantee" aria-labelledby="guar-heading">
      <div className="container">
        <div className="guar-inner">
          <div className="guar-badge sr" aria-hidden="true">
            &#10022;
          </div>
          <blockquote className="sr d1" id="guar-heading">
            &#8220;If you don’t achieve a clear return on your investment within{" "}
            <span>90 days</span>&#8230; we work for free until you do.&#8221;
          </blockquote>
          <p className="sr d2">
            Our engagement assurance means if early outcomes do not demonstrate
            clear operational value, we continue working with you to refine and
            stabilise the solution — at no additional cost — until it does.
          </p>
          <a
            href={Site.calendlyUrl}
            target="_blank"
            rel="noopener"
            className="btn btn-primary sr d3"
          >
            Start Risk-Free
            <svg
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

