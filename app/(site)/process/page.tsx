import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process | Barkaat Software Solutions",
  description:
    "A calm, transparent delivery process with weekly demos, async updates, and clear roadmaps.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="hero-card">
        <div className="hero-main">
          <div className="hero-kicker">PROCESS</div>
          <h2 className="hero-title">
            Calm, predictable, and transparent delivery.
          </h2>
          <p className="hero-subtitle">
            We design engagements that respect your time, create consistent
            progress, and keep everyone aligned without chaos.
          </p>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">📆</div>
              <div className="section-name">Weekly demos</div>
            </div>
            <div className="section-pill">Show, don&rsquo;t tell</div>
          </div>
          <div className="section-body">
            Frequent demos so stakeholders can see real progress and give
            feedback while changes are still cheap.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🧾</div>
              <div className="section-name">Roadmaps &amp; docs</div>
            </div>
            <div className="section-pill">Living artifacts</div>
          </div>
          <div className="section-body">
            Lightweight documentation, technical diagrams, and clear
            roadmaps that make onboarding new people painless.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🔁</div>
              <div className="section-name">Iterative delivery</div>
            </div>
            <div className="section-pill">Ship weekly</div>
          </div>
          <div className="section-body">
            Work in small, high-confidence batches, reducing risk while
            still moving forward quickly.
          </div>
        </article>
      </section>
    </>
  );
}