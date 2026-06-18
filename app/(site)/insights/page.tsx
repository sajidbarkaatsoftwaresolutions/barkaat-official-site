import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Insights | Barkaat Software Solutions",
  description:
    "Articles, notes, and engineering guides on architecture, developer experience, and product delivery.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <section className="hero-card">
        <div className="hero-main">
          <div className="hero-kicker">INSIGHTS</div>
          <h2 className="hero-title">
            Practical notes from real projects.
          </h2>
          <p className="hero-subtitle">
            No fluff. Just patterns, trade-offs, and lessons learned from
            shipping products across different industries.
          </p>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🏗️</div>
              <div className="section-name">Architecture</div>
            </div>
            <div className="section-pill">Systems that age well</div>
          </div>
          <div className="section-body">
            When to go modular vs. monolith, how to evolve schemas, and
            how to keep complexity under control over time.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">💻</div>
              <div className="section-name">Developer experience</div>
            </div>
            <div className="section-pill">Happy teams ship more</div>
          </div>
          <div className="section-body">
            Tooling, conventions, and workflows that keep your team fast
            without sacrificing quality.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">🚢</div>
              <div className="section-name">Product delivery</div>
            </div>
            <div className="section-pill">Ship with confidence</div>
          </div>
          <div className="section-body">
            How to break work into meaningful releases and align product,
            design, and engineering.
          </div>
        </article>
      </section>

      <section className="sections-padding py-24">
        <div className="sections-container">
          <div className="text-center mb-12">
            <h2 className="text-section-xl font-bold text-neutral-light mb-4">
              Want to learn more about scaling?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Reach out to discuss how these patterns apply to your specific challenges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-neural-crimson text-white rounded-lg hover:bg-neural-crimson-light transition-colors"
            >
              Schedule a Chat <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border-primary bg-obsidian-800 mt-24">
        <div className="sections-container py-12 text-center">
          <div className="border-t border-border-primary pt-8 text-center text-text-muted text-sm">
            <p>© 2026 Barkaat Software Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}