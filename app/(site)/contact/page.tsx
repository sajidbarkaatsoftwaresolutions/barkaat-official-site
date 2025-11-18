import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Barkaat Software Solutions",
  description:
    "Contact Barkaat Software Solutions to discuss new projects, architecture reviews, or long-term partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-card">
        <div className="hero-main">
          <div className="hero-kicker">CONTACT</div>
          <h2 className="hero-title">
            Start a conversation about your next release.
          </h2>
          <p className="hero-subtitle">
            Share a short brief, and we'll respond with concrete next
            steps, timelines, and how we'd approach your problem.
          </p>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">📝</div>
              <div className="section-name">Project briefs</div>
            </div>
            <div className="section-pill">New initiatives</div>
          </div>
          <div className="section-body">
            Have a new product, refactor, or integration in mind? Share a
            brief description, target dates, and constraints.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🧱</div>
              <div className="section-name">Architecture reviews</div>
            </div>
            <div className="section-pill">Second opinions</div>
          </div>
          <div className="section-body">
            We can review your current stack, identify risks, and propose
            pragmatic improvements.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🤝</div>
              <div className="section-name">Partnerships</div>
            </div>
            <div className="section-pill">Long-term</div>
          </div>
          <div className="section-body">
            Looking for an ongoing engineering partner instead of
            one-off projects? Let's talk about how we can embed with your
            team.
          </div>
        </article>
      </section>
    </>
  );
}