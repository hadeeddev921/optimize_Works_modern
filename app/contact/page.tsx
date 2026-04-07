import { Site } from "@/components/site";

export default function ContactPage() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy sr">
            <p className="label label-blue">Get in Touch</p>
            <h2 id="contact-heading">Ready to reduce your cost-to-serve?</h2>
            <p>
              We work with a small number of operations leaders at a time to
              ensure focused, measurable outcomes. If you’re managing backlog,
              SLA pressure, or high manual effort — let’s talk.
            </p>
            <div className="contact-links">
              <a href={`mailto:${Site.email}`} className="contact-link">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M3 8l9 6 9-6M3 6h18a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1z" />
                </svg>
                {Site.email}
              </a>
              <a
                href={Site.linkedInUrl}
                target="_blank"
                rel="noopener"
                className="contact-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="contact-card sr d2">
            <h3>AI Maturity Assessment</h3>
            <p>
              A structured conversation about where your operation is today,
              where the real cost-to-serve pressure lies, and whether AI is the
              right next step.
            </p>
            <a
              href={Site.calendlyUrl}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Book Your Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

