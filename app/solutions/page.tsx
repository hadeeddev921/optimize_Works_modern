import {
  SolIconAutomation,
  SolIconImplementation,
  SolIconOwnership,
  SolIconReview,
} from "@/components/SolutionIcons";
import { SolutionsAutoScroll } from "@/components/SolutionsAutoScroll";
import { SolutionsTimelineMotion } from "@/components/SolutionsTimelineMotion";
import { Site } from "@/components/site";

export default function SolutionsPage() {
  return (
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
            <div className="sol-proof">
              Identifies high-impact opportunities before any rollout.
            </div>
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
            <div className="sol-proof">
              Applied where teams feel the most friction.
            </div>
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
            <div className="sol-proof">
              Strengthens accountability without adding process overhead.
            </div>
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
              Deliver measurable improvements quickly, focusing on adoption and
              stability rather than large-scale transformation or
              experimentation.
            </p>
            <div className="sol-proof">
              Built for SLA-sensitive teams that cannot afford disruption.
            </div>
          </div>
          <SolutionsTimelineMotion />
        </div>
        <div className="sol-trust sr">
          Structured around measurable outcomes, operational continuity, and
          90-day value visibility.
        </div>

        <div className="results-cta sr" style={{ marginTop: 44 }}>
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
  );
}

