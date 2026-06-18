import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import {
  Compass,
  Layers,
  Workflow,
  Settings,
  CheckCircle,
  LayoutTemplate,
  Server,
  Cloud,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Barkaat Software Solutions",
  description:
    "End-to-end product engineering services: discovery, UX/UI, full-stack development, and cloud infrastructure on AWS.",
};

const services = [
  {
    icon: Compass,
    title: "Discovery & Strategy",
    pill: "Shape the right thing",
    body: "We clarify problems, validate assumptions, and define delivery roadmaps that reduce risk and align business and engineering early.",
  },
  {
    icon: Layers,
    title: "Architecture & Consulting",
    pill: "Scalable by design",
    body: "System architecture, technology selection, and security planning to ensure your platform scales reliably and safely.",
  },
  {
    icon: Workflow,
    title: "API & Systems Integration",
    pill: "Connected systems",
    body: "Robust APIs and seamless integrations connecting products, partners, and data across modern platforms.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    pill: "Operational stability",
    body: "Ongoing monitoring, upgrades, and continuous improvements to keep your systems secure, stable, and evolving.",
  },
  {
    icon: CheckCircle,
    title: "QA & Testing",
    pill: "Tested at scale",
    body: "Automated and manual testing strategies ensuring performance, reliability, and consistent product quality.",
  },
  {
    icon: LayoutTemplate,
    title: "UX / UI & Visual Design",
    pill: "From flows to pixels",
    body: "User journeys, wireframes, and high-fidelity interfaces that feel fast, intuitive, and beautifully crafted.",
  },
  {
    icon: Server,
    title: "Full-Stack Engineering",
    pill: "React · Vue · Node",
    body: "API-first backends and scalable frontends built with TypeScript, modern frameworks, and proven engineering practices.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    pill: "AWS-native",
    body: "Infrastructure-as-code, CI/CD pipelines, observability, and cost-aware architectures optimized for long-term ownership.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">
              ENGINEERING DIGITAL <span className="hero-title-accent">PRODUCTS THAT SCALE</span>
            </h1>
            <p className="hero-description">
              From idea to production, we design, build, and operate modern 
              digital platforms across cloud-native architectures using AWS, 
              Node/TypeScript, and modern front-end frameworks.
            </p>
            <Link href="/contact">
              <button className="hero-cta">
                Discuss Your Project <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          <div className="hero-right hidden lg:block" />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section">
        <div className="container">
          <h2 className="section-title mb-16">Our Service Offerings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-accent-crimson bg-opacity-10 rounded-lg">
                      <Icon className="w-5 h-5 text-accent-crimson" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-accent-crimson font-semibold mb-3">
                    {service.pill}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {service.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="section bg-obsidian-800 border-y border-border-primary">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Technology Stack</h2>
            <p className="section-subtitle">
              Battle-tested technologies for production systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { category: "Backend", tech: "Node.js · TypeScript · .NET" },
              { category: "Frontend", tech: "React · Vue · Next.js" },
              { category: "Cloud", tech: "AWS · Kubernetes · Docker" },
              { category: "Database", tech: "PostgreSQL · MongoDB · Redis" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-accent-crimson font-semibold text-sm mb-2">
                  {item.category}
                </p>
                <p className="text-text-secondary text-sm">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="section-title">Ready to Build?</h2>
          <p className="section-subtitle">
            Let&rsquo;s discuss your project requirements and create a tailored 
            engineering plan that fits your timeline and budget.
          </p>
          <Link href="/contact">
            <button className="btn btn-primary mt-8 text-lg px-8 py-4">
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
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
                <li><Link href="/services">All Services</Link></li>
                <li><Link href="/services">Technology</Link></li>
                <li><Link href="/solutions">Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-text-primary mb-4 uppercase">
                COMPANY
              </h5>
              <ul className="space-y-2 text-text-muted text-sm">
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/insights">Insights</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-text-primary mb-4 uppercase">
                CONTACT
              </h5>
              <ul className="space-y-2 text-text-muted text-sm">
                <li><a href="mailto:hello@barkaat.dev">hello@barkaat.dev</a></li>
                <li><Link href="/contact">Get in Touch</Link></li>
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
