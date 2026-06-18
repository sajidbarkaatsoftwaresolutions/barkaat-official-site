import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import NeuralMesh from "../components/NeuralMesh";
import TelemetryRibbon from "../components/TelemetryRibbon";
import Tabs, { Tab } from "../components/Tabs";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Barkaat | Engineering High-Scale Digital Ecosystems",
  description:
    "Premium engineering hub delivering cloud-native platforms, high-performance SaaS, and experience-driven systems.",
};

export default function HomePage() {
  const telemetryStats = [
    { number: "150M+", label: "Daily API Transactions" },
    { number: "600+", label: "Tech Architects Global" },
    { number: "99.99%", label: "Platform Uptime" },
    { number: "40ms", label: "Avg Response Time" },
  ];

  const scaleDomainsTabs: Tab[] = [
    {
      id: "saas",
      label: "SaaS Platforms",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-text-primary">
            Enterprise SaaS Solutions
          </h3>
          <p className="text-text-secondary leading-relaxed">
            Multi-tenant architectures built on AWS, with advanced security, 
            compliance, and scalability. From identity management to billing engines, 
            we architect systems that grow with your business.
          </p>
          <div className="pt-4">
            <button className="btn btn-primary">
              Explore SaaS Architecture <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "marketplace",
      label: "Marketplaces",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-text-primary">
            High-Scale Marketplace Engineering
          </h3>
          <p className="text-text-secondary leading-relaxed">
            Complex transactional systems with real-time matching, payment processing, 
            and reputation systems. We&rsquo;ve built marketplaces that handle millions of 
            daily transactions with zero downtime.
          </p>
          <div className="pt-4">
            <button className="btn btn-primary">
              View Marketplace Patterns <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "analytics",
      label: "Analytics & Data",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-text-primary">
            Real-Time Analytics Platforms
          </h3>
          <p className="text-text-secondary leading-relaxed">
            Data pipeline architectures using streaming technologies, OLAP databases, 
            and machine learning integration. We design systems that turn raw data into 
            actionable intelligence in real time.
          </p>
          <div className="pt-4">
            <button className="btn btn-primary">
              Discover Data Stack <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">
              ENGINEERING HIGH-SCALE <span className="hero-title-accent">DIGITAL ECOSYSTEMS</span>
            </h1>
            <p className="hero-description">
              Senior-led engineering studio building production-grade cloud platforms, 
              high-performance SaaS, and experience-driven systems. From architecture 
              to deployment, we move at scale.
            </p>
            <Link href="/contact">
              <button className="hero-cta">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          <div className="hero-right">
            <div className="neural-mesh">
              <NeuralMesh />
            </div>
          </div>
        </div>
      </section>

      {/* TELEMETRY RIBBON */}
      <TelemetryRibbon stats={telemetryStats} />

      {/* SCALE DOMAINS TAB SECTION */}
      <Tabs tabs={scaleDomainsTabs} title="Scale Domains" />

      {/* SERVICES OVERVIEW SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            End-to-end engineering excellence across the entire product lifecycle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Architecture & Strategy",
                desc: "Cloud infrastructure design, system scalability, and technology roadmaps for high-growth products.",
              },
              {
                title: "Full-Stack Development",
                desc: "React, Vue, Node.js, and cloud-native backends. We build production systems, not prototypes.",
              },
              {
                title: "DevOps & Infrastructure",
                desc: "AWS, Kubernetes, CI/CD pipelines, monitoring, and platform engineering for reliability.",
              },
              {
                title: "Product Engineering",
                desc: "From discovery to deployment. We partner as embedded technical leads on your product team.",
              },
              {
                title: "Performance Optimization",
                desc: "Core Web Vitals, database optimization, caching strategies, and zero-downtime deployments.",
              },
              {
                title: "Team Augmentation",
                desc: "Senior engineers embedded in your org. We scale your technical capability, not headcount.",
              },
            ].map((service, idx) => (
              <div key={idx} className="card">
                <h3 className="text-lg font-bold text-accent-crimson mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/services">
              <button className="btn btn-primary">
                Explore All Services <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section bg-obsidian-800 border-t border-border-primary">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="section-title">Ready to Scale?</h2>
          <p className="section-subtitle">
            Let&rsquo;s discuss your engineering challenges and build the system that powers 
            the next generation of your product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact">
              <button className="btn btn-primary text-lg px-8 py-4">
                Start Project <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/work">
              <button className="btn btn-secondary text-lg px-8 py-4">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-obsidian-900 border-t border-border-primary py-16">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-text-primary mb-4">BARKAAT</h4>
              <p className="text-text-muted text-sm">
                Engineering high-scale digital ecosystems.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-text-primary mb-4 uppercase">
                SERVICES
              </h5>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>
                  <Link href="/services">Architecture</Link>
                </li>
                <li>
                  <Link href="/services">Development</Link>
                </li>
                <li>
                  <Link href="/services">Infrastructure</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-text-primary mb-4 uppercase">
                COMPANY
              </h5>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>
                  <Link href="/work">Work</Link>
                </li>
                <li>
                  <Link href="/insights">Insights</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-text-primary mb-4 uppercase">
                CONTACT
              </h5>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>
                  <a href="mailto:hello@barkaat.dev">hello@barkaat.dev</a>
                </li>
                <li>
                  <Link href="/contact">Get in Touch</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border-primary pt-8 text-center text-text-muted text-sm">
            <p>© 2026 Barkaat Software Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}