import { Site } from "@/components/site";

export default function ResultsPage() {
  return (
    <section id="results" aria-labelledby="res-heading">
      <div className="container">
        <div className="sr">
          <p className="label label-blue">Measurable Results</p>
          <h2 id="res-heading">
            Outcomes we track and commit to,
            <br />
            without destabilising operations
          </h2>
        </div>

        <div className="results-grid">
          <div className="res-card sr d1">
            <div className="res-stat" aria-label="Risk Reduction">
              ↓ Risk
            </div>
            <h3>Low Risk Approach</h3>
            <p>
              We start with contained, clearly scoped improvements designed to
              validate impact before broader rollout.
            </p>
            <div className="res-bar" style={{ width: "40%" }} aria-hidden="true" />
          </div>

          <div className="res-card sr d2">
            <div className="res-stat" aria-label="Load Reduction">
              ↓ Load
            </div>
            <h3>Administrative Load Reduction</h3>
            <p>
              By addressing workflow friction and repetitive tasks, we help
              teams materially reduce administrative overhead and improve
              throughput within existing structures.
            </p>
            <div className="res-bar" style={{ width: "65%" }} aria-hidden="true" />
          </div>

          <div className="res-card sr d3">
            <div className="res-stat" aria-label="Capacity Increase">
              ↑ Capacity
            </div>
            <h3>Capacity Released</h3>
            <p>
              We focus on reducing avoidable manual effort and rework, creating
              meaningful capacity for higher-value operational work without
              increasing headcount.
            </p>
            <div className="res-bar" style={{ width: "78%" }} aria-hidden="true" />
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
  );
}

