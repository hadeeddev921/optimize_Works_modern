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
          <h2 id="sol-heading">How we work</h2>
          <p className="sol-intro-copy">
            A simple, staged approach — designed to prove value before we go any
            further.
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
              Assess where knowledge gaps are costing time and money. Before we
              build anything, we map what your team knows, what&apos;s
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
              guides, underwriting rules, internal playbooks, placement history
              — organised into a single source of truth.
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
              Configured to your workflows, tested against real producer queries,
              and ready for your team to use.
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
              change, the system updates. Your team gets alerts before outdated
              information causes a problem.
            </p>
          </div>
          <SolutionsTimelineMotion />
        </div>
        <div className="sol-trust sr">
          Every engagement starts with an AI Readiness Review. We only build
          what the evidence supports.
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

