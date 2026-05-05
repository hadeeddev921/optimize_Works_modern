import type { CSSProperties } from "react";
import {
  SolIconAutomation,
  SolIconImplementation,
  SolIconOwnership,
  SolIconReview,
} from "@/components/SolutionIcons";
import { HeroVisual } from "@/components/HeroVisual";
import { SolutionsAutoScroll } from "@/components/SolutionsAutoScroll";
import { SolutionsTimelineMotion } from "@/components/SolutionsTimelineMotion";
import { Site } from "@/components/site";

type CSSVars = CSSProperties & Record<`--${string}`, string>;

export default function Home() {
  return (
    <>
      <section id="hero" aria-labelledby="hero-heading">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-1" aria-hidden="true" />
        <div className="hero-glow hero-glow-2" aria-hidden="true" />

        <div className="hero-layout">
          <div className="hero-inner">
            <div className="hero-tag" aria-hidden="true">
              AI KNOWLEDGE SYSTEMS &middot; FOR INSURANCE BROKERAGES
            </div>
            <h1 id="hero-heading">
              <span>Your producers know which carriers write which risks.</span>
              <span className="hero-heading-emphasis">Your system doesn&apos;t.</span>
            </h1>
            <p className="hero-sub">
              We build AI knowledge systems for insurance brokerages. Carrier
              appetite, underwriting rules, placement history — accessible to
              your whole team in seconds, grounded in your own documentation.
            </p>
            <div className="hero-actions">
              <a
                href={Site.calendlyUrl}
                target="_blank"
                rel="noopener"
                className="btn btn-hero-cta"
              >
                Book a Free AI Readiness Call
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
              <a href="#solutions" className="btn btn-ghost-dark">
                Keep Our Solutions
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section id="why" aria-labelledby="why-heading">
        <div className="why-blob why-blob-1" aria-hidden="true" />
        <div className="why-blob why-blob-2" aria-hidden="true" />
        <div className="container">

          <div className="why-header sr">
            <h2 id="why-heading">
              We&apos;ve run the teams others try to advise.
            </h2>
            <p>
              That means every engagement is shaped by how operations actually
              work — not how a slide deck says they should.
            </p>
          </div>

          <div className="why-divider" aria-hidden="true" />

          <div className="why-pillars">
            <div className="why-pillar sr d1" style={{ "--p-color": "#3a9fe8" } as CSSVars}>
              <div className="why-pillar-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3a9fe8"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </div>
              <h3>Understand the work before changing it</h3>
              <p>
                We map how work actually flows before recommending anything. AI
                comes after we understand the real problem.
              </p>
            </div>

            <div className="why-pillar sr d2" style={{ "--p-color": "#28c880" } as CSSVars}>
              <div className="why-pillar-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#28c880"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>No big rollouts. No disruption.</h3>
              <p>
                Every improvement is contained and validated before it goes
                wider. The operation keeps running while we deliver.
              </p>
            </div>

            <div className="why-pillar sr d3" style={{ "--p-color": "#a78bfa" } as CSSVars}>
              <div className="why-pillar-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <h3>Outcomes you can measure</h3>
              <p>
                We agree upfront what success looks like — and we track it. No
                ambiguous experiments.
              </p>
            </div>
          </div>

          <div className="why-statement sr">
            We start small, prove value fast, and only go further when the
            results justify it.
          </div>
        </div>
      </section>

      <section id="solutions" aria-labelledby="sol-heading">
        <SolutionsAutoScroll sectionId="solutions" />
        <div className="container">
          <div className="sr">
            <h2 id="sol-heading">
              How we work
            </h2>
            <p className="sol-intro-copy">
              A simple, staged approach — designed to prove value before we go
              any further.
            </p>
          </div>
          <div className="sol-grid sol-grid-timeline">
            <div className="sol-card sol-card-1 sr d1" data-step="1">
              <div className="sol-step-node" aria-hidden="true" />
              <div className="sol-card-left-bar" aria-hidden="true" />
              <div className="sol-card-meta">Step 1</div>
              <div className="sol-num">01</div>
              <div className="sol-icon" aria-hidden="true">
                <SolIconReview />
              </div>
              <h3>AI Readiness Review</h3>
              <p>
                Assess where knowledge gaps are costing time and money. Before
                we build anything, we map what your team knows, what&apos;s
                documented, and where the gaps are.
              </p>
              <div className="sol-proof">No assumptions.</div>
            </div>
            <div className="sol-card sol-card-2 sr d2" data-step="2">
              <div className="sol-step-node" aria-hidden="true" />
              <div className="sol-card-left-bar" aria-hidden="true" />
              <div className="sol-card-meta">Step 2</div>
              <div className="sol-num">02</div>
              <div className="sol-icon" aria-hidden="true">
                <SolIconAutomation />
              </div>
              <h3>Knowledge Architecture</h3>
              <p>
                Structure your documentation so the system can use it. Carrier
                guides, underwriting rules, internal playbooks, placement
                history — organised into a single source of truth.
              </p>
            </div>
            <div className="sol-card sol-card-3 sr d3" data-step="3">
              <div className="sol-step-node" aria-hidden="true" />
              <div className="sol-card-left-bar" aria-hidden="true" />
              <div className="sol-card-meta">Step 3</div>
              <div className="sol-num">03</div>
              <div className="sol-icon" aria-hidden="true">
                <SolIconOwnership />
              </div>
              <h3>Build &amp; Configure</h3>
              <p>
                Build the Compass knowledge system on your documentation.
                Configured to your workflows, tested against real producer
                queries, and ready for your team to use.
              </p>
            </div>
            <div className="sol-card sol-card-4 sr d4" data-step="4">
              <div className="sol-step-node" aria-hidden="true" />
              <div className="sol-card-left-bar" aria-hidden="true" />
              <div className="sol-card-meta">Step 4</div>
              <div className="sol-num">04</div>
              <div className="sol-icon" aria-hidden="true">
                <SolIconImplementation />
              </div>
              <h3>Go Live &amp; Maintain</h3>
              <p>
                Deploy with your team and keep it current. As carrier guidelines
                change, the system updates. Your team gets alerts before
                outdated information causes a problem.
              </p>
            </div>
            <SolutionsTimelineMotion />
          </div>
          <div className="sol-trust sr">
            Every engagement starts with an AI Readiness Review. We only build
            what the evidence supports.
          </div>
        </div>
      </section>

      <section id="who" aria-labelledby="who-heading">
        <div className="container">
          <div className="who-header sr" style={{ marginBottom: 52 }}>
            <p className="label label-light">Who We Help</p>
            <h2 id="who-heading" style={{ color: "var(--white)" }}>
              Who we work with
            </h2>
          </div>
          <div className="who-grid-modern">
            <div className="who-card-modern who-card-1 sr d1">
              <div className="who-card-icon-wrap">
                <span aria-hidden="true">🏢</span>
              </div>
              <div className="who-card-badge">Insurance Brokerages</div>
              <h3>Insurance Brokerages</h3>
              <p>
                Your producers carry years of knowledge about carrier appetite,
                underwriting rules, and market placement. When that knowledge
                lives in people&apos;s heads and nowhere else, it creates
                inconsistency, slow onboarding, and E&amp;O exposure.
              </p>
              <ul className="who-points">
                <li>Commercial and personal lines brokerages</li>
                <li>Owner-led and director-level businesses</li>
                <li>Teams where senior knowledge is the bottleneck</li>
              </ul>
            </div>
            <div className="who-card-modern who-card-2 sr d2">
              <div className="who-card-icon-wrap">
                <span aria-hidden="true">👔</span>
              </div>
              <div className="who-card-badge">Mortgage Brokers</div>
              <h3>Mortgage Brokers</h3>
              <p>
                Lender criteria, product rules, and compliance requirements change
                constantly. A knowledge system keeps your whole team current — so
                no one quotes from memory or relies on the one person who knows
                the product inside out.
              </p>
              <ul className="who-points">
                <li>Owner-led mortgage brokerages</li>
                <li>Businesses scaling beyond the founding team</li>
                <li>Firms with high compliance and accuracy requirements</li>
              </ul>
            </div>
            <div className="who-card-modern who-card-3 sr d3">
              <div className="who-card-icon-wrap">
                <span aria-hidden="true">🏦</span>
              </div>
              <div className="who-card-badge">Accountancy Firms</div>
              <h3>Accountancy Firms</h3>
              <p>
                Senior accountants carry client history, technical knowledge, and
                process expertise that isn&apos;t documented anywhere. When they
                leave, it goes with them. A knowledge system means the business
                keeps running at the same standard.
              </p>
              <ul className="who-points">
                <li>Owner-led practices and mid-sized firms</li>
                <li>Businesses with high staff turnover risk</li>
                <li>Teams where onboarding time is a real cost</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="results" aria-labelledby="res-heading">
        <div className="container">
          <div className="sr">
            <p className="label label-blue">Client Results</p>
            <h2 id="res-heading">
              Real work. Real outcomes.
            </h2>
            <p className="results-sub">
              We&apos;ve fully automated the refund process for a UK-based
              vending operator — removing significant manual effort and
              improving customer experience from day one.
            </p>
          </div>
          <div className="results-grid">
            <article className="res-card res-card-testimonial sr d1">
              <p className="res-eyebrow">Client Testimonial</p>
              <p className="res-quote">
                <span className="res-quote-icon res-quote-icon-start" aria-hidden="true">❝</span>
                What stood out most is their ability to combine technical
                delivery with a strong understanding of the commercial impact.
                The solutions delivered have already helped improve efficiency
                and enhance the customer experience, in particular, we have now
                fully automated our refund process, which has removed a
                significant amount of manual effort from the business. Off the
                back of the initial results, we made the decision to expand the
                engagement into a second project.
                <span className="res-quote-icon res-quote-icon-end" aria-hidden="true">❞</span>
              </p>
              <p className="res-author">
                <span className="res-author-name">Charlie</span>
                <span className="res-author-sep" aria-hidden="true">
                  |
                </span>
                <span className="res-author-role">Finance, People &amp; Corporate Services Director</span>
              </p>
            </article>
          </div>
          <div className="results-cta sr">
            <a
              href={Site.googleFormUrl}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Book an AI Readiness Review
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

      <section id="contact" aria-labelledby="contact-heading">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-copy sr">
              <p className="label label-blue">Get in Touch</p>
              <h2 id="contact-heading">Let&apos;s start with one focused call.</h2>
              <p>
                A short conversation to understand your operation, identify
                where value is likely, and decide whether it&apos;s worth moving
                forward.
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
                  <span>{Site.email}</span>
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
              <h3>Free AI Readiness Call</h3>
              <p>
                A focused 30-minute session. No pitch, no obligation — just a
                practical view of where AI can reduce manual load in your
                operation.
              </p>
              <a
                href={Site.calendlyUrl}
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                Book Your Free Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
