import type { CSSProperties } from "react";

type CSSVars = CSSProperties & Record<`--${string}`, string>;

export default function WhyPage() {
  return (
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
            We’ve run the teams others try to advise. That experience shapes
            every engagement — cautious, practical, and always in service of
            operational stability over speed.
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
              rollout. Operational stability is non-negotiable — not a target we
              work towards, but a constraint we work within.
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
              experiments to manage — just measurable outcomes delivered at the
              pace your operation can absorb.
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
            <div className="why-stat-desc">ROI guarantee — or we work for free</div>
          </div>
        </div>
      </div>
    </section>
  );
}

