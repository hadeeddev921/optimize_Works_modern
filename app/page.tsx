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
              Operational AI &middot; Service-Led Organisations
            </div>
            <h1 id="hero-heading">
              Reduce Your
              <br />
              <em>Cost-to-Serve</em>
              <br />
              Without the Risk
            </h1>
            <p className="hero-sub">
              We work with operations leaders in insurance and field service to
              identify where work actually breaks down — then apply
              low-disruption AI where it safely reduces manual effort,
              operational risk, and cost-to-serve.
            </p>
            <div className="hero-actions">
              <a
                href={Site.calendlyUrl}
                target="_blank"
                rel="noopener"
                className="btn btn-hero-cta"
              >
                Book an AI Maturity Assessment
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
                Our Solutions
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
              Built from inside
              <br />
              operations — not
              <br />
              consulting theory
            </h2>
            <p>
              We&apos;ve run the teams others try to advise. That experience
              shapes every engagement — cautious, practical, and always in
              service of operational stability over speed.
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
              <h3>Workflow First, Technology Second</h3>
              <p>
                We start with how work actually moves — ownership, handoffs,
                bottlenecks. AI comes only after we understand the real
                operational structure.
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
              <h3>Low-Disruption by Design</h3>
              <p>
                Every improvement is scoped to validate impact before any broader
                rollout. Operational stability is non-negotiable — not a target
                we work towards, but a constraint we work within.
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
              <h3>Results You Can Stand Behind</h3>
              <p>
                Clear metrics tied to your SLAs, backlog, and cost-to-serve. No
                experiments to manage — just measurable outcomes delivered at
                the pace your operation can absorb.
              </p>
            </div>
          </div>

          <div className="why-stats-row sr">
            <div className="why-stat">
              <div className="why-stat-num" style={{ "--s-color": "#3a9fe8" } as CSSVars}>
                ↓ 34%
              </div>
              <div className="why-stat-desc">Average cost-to-serve reduction</div>
            </div>
            <div className="why-stat">
              <div className="why-stat-num" style={{ "--s-color": "#28c880" } as CSSVars}>
                98.4%
              </div>
              <div className="why-stat-desc">
                SLA compliance maintained throughout
              </div>
            </div>
            <div className="why-stat">
              <div className="why-stat-num" style={{ "--s-color": "#a78bfa" } as CSSVars}>
                90-day
              </div>
              <div className="why-stat-desc">
                ROI guarantee — or we work for free
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" aria-labelledby="sol-heading">
        <SolutionsAutoScroll sectionId="solutions" />
        <div className="container">
          <div className="sr">
            <p className="label label-blue">Our Solutions</p>
            <h2 id="sol-heading">
              Practical improvements for
              <br />
              service-heavy operations
            </h2>
            <p className="sol-intro-copy">
              Low-disruption solutions designed around how your teams actually
              work — not how a textbook says they should.
            </p>
          </div>
          <div className="sol-grid sol-grid-timeline">
            <div className="sol-card sol-card-1 sr d1" data-step="1">
              <div className="sol-step-node" aria-hidden="true" />
              <div className="sol-card-left-bar" aria-hidden="true" />
              <div className="sol-card-meta">Diagnostic Foundation</div>
              <div className="sol-num">01</div>
              <div className="sol-icon" aria-hidden="true">
                <SolIconReview />
              </div>
              <h3>Operational Review</h3>
              <p>
                A structured review of how work actually flows through your
                operation, identifying bottlenecks, manual effort, and SLA risk
                that drive cost-to-serve.
              </p>
              <div className="sol-proof">Identifies high-impact opportunities before any rollout.</div>
            </div>
            <div className="sol-card sol-card-2 sr d2" data-step="2">
              <div className="sol-step-node" aria-hidden="true" />
              <div className="sol-card-left-bar" aria-hidden="true" />
              <div className="sol-card-meta">Execution Layer</div>
              <div className="sol-num">02</div>
              <div className="sol-icon" aria-hidden="true">
                <SolIconAutomation />
              </div>
              <h3>Workflow Automation</h3>
              <p>
                Targeted automation on priority workflows to cut manual effort
                and reduce operational risk.
              </p>
              <div className="sol-proof">Applied where teams feel the most friction.</div>
            </div>
            <div className="sol-card sol-card-3 sr d3" data-step="3">
              <div className="sol-step-node" aria-hidden="true" />
              <div className="sol-card-left-bar" aria-hidden="true" />
              <div className="sol-card-meta">Governance Layer</div>
              <div className="sol-num">03</div>
              <div className="sol-icon" aria-hidden="true">
                <SolIconOwnership />
              </div>
              <h3>Workflow &amp; Ownership Optimisation</h3>
              <p>
                Clarify ownership, handoffs, and decision points across service
                workflows to reduce friction, rework, and hidden cost-to-serve.
              </p>
              <div className="sol-proof">Strengthens accountability without adding process overhead.</div>
            </div>
            <div className="sol-card sol-card-4 sr d4" data-step="4">
              <div className="sol-step-node" aria-hidden="true" />
              <div className="sol-card-left-bar" aria-hidden="true" />
              <div className="sol-card-meta">Delivery Assurance</div>
              <div className="sol-num">04</div>
              <div className="sol-icon" aria-hidden="true">
                <SolIconImplementation />
              </div>
              <h3>Low-Disruption Implementation</h3>
              <p>
                Deliver measurable improvements quickly, focusing on adoption
                and stability rather than large-scale transformation or
                experimentation.
              </p>
              <div className="sol-proof">Built for SLA-sensitive teams that cannot afford disruption.</div>
            </div>
            <SolutionsTimelineMotion />
          </div>
          <div className="sol-trust sr">
            Structured around measurable outcomes, operational continuity, and 90-day value visibility.
          </div>
        </div>
      </section>

      <section id="who" aria-labelledby="who-heading">
        <div className="container">
          <div className="who-header sr" style={{ marginBottom: 52 }}>
            <p className="label label-light">Who We Help</p>
            <h2 id="who-heading" style={{ color: "var(--white)" }}>
              Service-heavy organisations where
              <br />
              operational performance matters
            </h2>
          </div>
          <div className="who-grid-modern">
            <div className="who-card-modern who-card-1 sr d1">
              <div className="who-card-icon-wrap">
                <span aria-hidden="true">🏢</span>
              </div>
              <div className="who-card-badge">Service Organisations</div>
              <h3>Service-Heavy Organisations</h3>
              <p>
                Organisations where value is delivered through people,
                workflows, and responsiveness — and where backlog, manual
                processes, and SLA pressure directly impact cost-to-serve and
                customer experience.
              </p>
              <ul className="who-points">
                <li>High-volume service delivery teams</li>
                <li>SLA-driven operational environments</li>
                <li>Manual-process-heavy workflows</li>
              </ul>
            </div>
            <div className="who-card-modern who-card-2 sr d2">
              <div className="who-card-icon-wrap">
                <span aria-hidden="true">👔</span>
              </div>
              <div className="who-card-badge">Operations Leaders</div>
              <h3>Operations Leaders with Real Accountability</h3>
              <p>
                COOs, VP / Directors of Operations, and Heads of Service who own
                performance metrics — SLAs, backlog, throughput, and operational
                cost — and need improvements they can stand behind.
              </p>
              <ul className="who-points">
                <li>COOs &amp; VP of Operations</li>
                <li>Heads of Service &amp; Delivery</li>
                <li>Owners of SLA &amp; cost metrics</li>
              </ul>
            </div>
            <div className="who-card-modern who-card-3 sr d3">
              <div className="who-card-icon-wrap">
                <span aria-hidden="true">🏦</span>
              </div>
              <div className="who-card-badge">Insurance &amp; Regulated</div>
              <h3>Insurance &amp; Regulated Service Environments</h3>
              <p>
                Insurance carriers, brokers, and service organisations in
                regulated, high-volume environments where administrative drag and
                fragmented workflows quietly drive up cost-to-serve.
              </p>
              <ul className="who-points">
                <li>Insurance carriers &amp; brokers</li>
                <li>Regulated, high-compliance environments</li>
                <li>Administrative &amp; claims processing teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="results" aria-labelledby="res-heading">
        <div className="container">
          <div className="sr">
            <p className="label label-blue">Measurable Results</p>
            <h2 id="res-heading">
              Outcomes we track and commit to,
              <br />
              without destabilising operations
            </h2>
            <p className="results-sub">
              Every engagement is scoped around metrics that matter - cost, capacity, and compliance.
            </p>
          </div>
          <div className="results-grid">
            <article className="res-card res-card-1 sr d1">
              <div className="res-ring-wrap" aria-hidden="true">
                <div className="res-ring">
                  <span>40%</span>
                </div>
                <div className="res-stat-block">
                  <div className="res-big-num">↓40%</div>
                  <div className="res-big-label">Operational Risk</div>
                </div>
              </div>
              <h3>Low Risk Approach</h3>
              <p>
                We start with contained, clearly scoped improvements designed to
                validate impact before broader rollout.
              </p>
            </article>
            <article className="res-card res-card-2 sr d2">
              <div className="res-ring-wrap" aria-hidden="true">
                <div className="res-ring">
                  <span>65%</span>
                </div>
                <div className="res-stat-block">
                  <div className="res-big-num">↓65%</div>
                  <div className="res-big-label">Admin Overhead</div>
                </div>
              </div>
              <h3>Administrative Load Reduction</h3>
              <p>
                By addressing workflow friction and repetitive tasks, we help
                teams materially reduce administrative overhead and improve
                throughput within existing structures.
              </p>
            </article>
            <article className="res-card res-card-3 sr d3">
              <div className="res-ring-wrap" aria-hidden="true">
                <div className="res-ring">
                  <span>78%</span>
                </div>
                <div className="res-stat-block">
                  <div className="res-big-num">+78%</div>
                  <div className="res-big-label">Capacity Released</div>
                </div>
              </div>
              <h3>Capacity Released</h3>
              <p>
                We focus on reducing avoidable manual effort and rework, creating
                meaningful capacity for higher-value operational work without
                increasing headcount.
              </p>
            </article>
          </div>
          <div className="res-ticker-wrap sr" aria-label="Results highlights">
            <div className="res-ticker-track">
              <span className="res-ticker-item">
                <span className="res-ticker-dot" />
                ↓ 34% Average Cost-to-Serve
              </span>
              <span className="res-ticker-item">
                <span className="res-ticker-dot" />
                98.4% SLA Compliance Maintained
              </span>
              <span className="res-ticker-item">
                <span className="res-ticker-dot" />
                90-Day ROI Guarantee
              </span>
              <span className="res-ticker-item">
                <span className="res-ticker-dot" />
                Low-Disruption Implementation
              </span>
              <span className="res-ticker-item">
                <span className="res-ticker-dot" />
                ↓ 34% Average Cost-to-Serve
              </span>
              <span className="res-ticker-item">
                <span className="res-ticker-dot" />
                98.4% SLA Compliance Maintained
              </span>
              <span className="res-ticker-item">
                <span className="res-ticker-dot" />
                90-Day ROI Guarantee
              </span>
              <span className="res-ticker-item">
                <span className="res-ticker-dot" />
                Low-Disruption Implementation
              </span>
            </div>
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

      <section id="guarantee" aria-labelledby="guar-heading">
        <div className="container">
          <div className="guar-inner">
            <div className="guar-badge sr" aria-hidden="true">
              <span className="guar-badge-star">✦</span>
            </div>
            <blockquote className="sr d1" id="guar-heading">
              “If you don’t achieve a clear return on your investment within{" "}
              <span>90 days</span>… we work for free until you do.”
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
              <h3>AI Maturity Assessment</h3>
              <p>
                A structured conversation about where your operation is today,
                where the real cost-to-serve pressure lies, and whether AI is
                the right next step.
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
    </>
  );
}
