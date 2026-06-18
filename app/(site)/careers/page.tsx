import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import JobsTable from "../../components/JobsTable";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Barkaat Software Solutions",
  description:
    "Join a senior-first, remote-friendly engineering studio focused on meaningful work and modern tech.",
};

const jobListings = [
  {
    id: "1",
    role: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    level: "Senior",
  },
  {
    id: "2",
    role: "Product Architect",
    department: "Architecture",
    location: "Remote",
    level: "Lead",
  },
  {
    id: "3",
    role: "DevOps & Infrastructure Engineer",
    department: "Platform",
    location: "Remote",
    level: "Senior",
  },
  {
    id: "4",
    role: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    level: "Mid",
  },
  {
    id: "5",
    role: "Cloud Security Specialist",
    department: "Security",
    location: "Remote",
    level: "Senior",
  },
  {
    id: "6",
    role: "Tech Lead - Frontend",
    department: "Engineering",
    location: "Remote",
    level: "Lead",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">
              SMALL, SENIOR, AND <span className="hero-title-accent">CRAFT-FOCUSED</span>
            </h1>
            <p className="hero-description">
              We look for engineers and designers who care deeply about quality, 
              communication, and outcomes. Work on complex systems with modern tools 
              and direct access to decision-makers.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="text-text-secondary text-sm font-semibold">
                ✓ Remote-first
              </button>
              <button className="text-text-secondary text-sm font-semibold">
                ✓ Senior team
              </button>
              <button className="text-text-secondary text-sm font-semibold">
                ✓ Modern stack
              </button>
            </div>
          </div>

          <div className="hero-right hidden lg:block" />
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <JobsTable jobs={jobListings} title="Open Positions" />

      {/* WHY BARKAAT */}
      <section className="section">
        <div className="container">
          <h2 className="section-title mb-16">Why Barkaat?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Senior First",
                desc: "We attract experienced engineers. No junior grind—you'll work alongside architects and product leaders.",
              },
              {
                title: "Meaningful Work",
                desc: "Every project is chosen with care. You'll build systems that matter to real users and real businesses.",
              },
              {
                title: "Modern Stack",
                desc: "TypeScript, React, Node.js, AWS, Kubernetes. We use tools that compound your knowledge over time.",
              },
              {
                title: "Remote-Friendly",
                desc: "Work from anywhere. We're distributed across North America, EU, and APAC. No office politics.",
              },
              {
                title: "Async-First Culture",
                desc: "Clear communication, written documentation, and respect for your time. Meetings only when necessary.",
              },
              {
                title: "Learning & Growth",
                desc: "Conference budgets, learning stipends, and time to explore new technologies. We invest in your growth.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <h3 className="text-lg font-bold text-accent-crimson mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="section bg-obsidian-800 border-y border-border-primary">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            A global network of 20+ senior engineers, architects, and designers 
            committed to shipping excellence.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { label: "Years Combined", value: "150+" },
              { label: "Countries", value: "12" },
              { label: "Companies Built", value: "40+" },
              { label: "Avg. Exp.", value: "12 yrs" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold text-accent-crimson mb-2">
                  {stat.value}
                </p>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="section-title">Ready to Join?</h2>
          <p className="section-subtitle">
            If you see yourself in our values and want to work on meaningful 
            projects with world-class engineers, let&rsquo;s talk.
          </p>
          <Link href="/contact">
            <button className="btn btn-primary mt-8 text-lg px-8 py-4">
              Apply or Learn More <ArrowRight className="w-5 h-5" />
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