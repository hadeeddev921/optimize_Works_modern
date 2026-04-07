export default function WhoWeHelpPage() {
  return (
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
              Organisations where value is delivered through people, workflows,
              and responsiveness — and where backlog, manual processes, and SLA
              pressure directly impact cost-to-serve and customer experience.
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
  );
}

