import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import {
  Search,
  Map,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Process | Barkaat Software Solutions",
  description:
    "A calm, transparent delivery process with weekly demos, async updates, and clear roadmaps.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <section className="hero-card">
        <div className="hero-main">
          {/* <div className="hero-kicker">PROCESS</div> */}
          <div className="hero-kicker">OUR PROCESS</div>
          <h2 className="hero-title">
            {/* Calm, predictable, and transparent delivery. */}
            Our Software Development Process
          </h2>
          <p className="hero-subtitle">
            {/* We design engagements that respect your time, create consistent
            progress, and keep everyone aligned without chaos. */}
            We follow a structured and transparent approach to transform ideas
            into robust digital products. Our process ensures quality,
            efficiency, and alignment with your business goals:
          </p>
        </div>
      </section>

      <section className="sections-grid">
        {/* === NEW CONTENT === */}
        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">
                <Search size={18} />
              </div>
              <div className="section-name">
                Discovery & Requirement Analysis
              </div>
            </div>
          </div>
          <div className="section-body">
            Understanding your business, users, and goals. Gathering
            requirements, defining project scope, and identifying key features.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">
                <Map size={18} />
              </div>
              <div className="section-name">Planning & Strategy</div>
            </div>
          </div>
          <div className="section-body">
            Crafting a roadmap and technical architecture. Selecting the right
            technology stack (Node.js, .NET, Spring Boot, React, Vue, etc.).
            Estimating timelines and resources.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">
                <PenTool size={18} />
              </div>
              <div className="section-name">Design & Prototyping</div>
            </div>
          </div>
          <div className="section-body">
            Creating wireframes, mockups, and user experience flows. Iterating
            designs based on feedback before development.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">
                <Code2 size={18} />
              </div>
              <div className="section-name">Development & Implementation</div>
            </div>
          </div>
          <div className="section-body">
            Writing clean, scalable, and maintainable code. Building backend
            services, APIs, and front-end interfaces. Following agile practices
            with regular sprints.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">
                <ShieldCheck size={18} />
              </div>
              <div className="section-name">Testing & Quality Assurance</div>
            </div>
          </div>
          <div className="section-body">
            Conducting rigorous functional, performance, and security testing.
            Ensuring the software works seamlessly across devices and platforms.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">
                <Rocket size={18} />
              </div>
              <div className="section-name">Deployment & Launch</div>
            </div>
          </div>
          <div className="section-body">
            Deploying the product to production environments. Monitoring initial
            performance and ensuring smooth launch.
          </div>
        </article>

        <article className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">
              <div className="section-icon">
                <RefreshCw size={18} />
              </div>
              <div className="section-name">
                Maintenance & Continuous Improvement
              </div>
            </div>
          </div>
          <div className="section-body">
            Providing support, updates, and performance optimizations. Iterating
            features based on user feedback and evolving requirements.
          </div>
        </article>

        {/* === OLD CONTENT (Commented Out) === */}
        {/* 
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
        */}
      </section>

      <section className="sections-padding py-24">
        <div className="sections-container">
          <div className="text-center mb-12">
            <h2 className="text-section-xl font-bold text-neutral-light mb-4">
              Ready to start building?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Let&rsquo;s discuss how our proven process can deliver your product on time and to spec.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-neural-crimson text-white rounded-lg hover:bg-neural-crimson-light transition-colors"
            >
              Start a Project <ArrowRight size={20} />
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
