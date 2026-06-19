import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import NeuralMesh from "../components/NeuralMesh";
import TelemetryRibbon from "../components/TelemetryRibbon";
import Tabs, { Tab } from "../components/Tabs";
import ServicesSection from "../components/ServicesSection";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Barkaat Software Solutions | Engineering High-Scale Digital Ecosystems",
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
            compliance, and scalability. From identity management to billing
            engines, we architect systems that grow with your business.
          </p>
          <div className="pt-4">
            <button className="py-3 px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
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
            Complex transactional systems with real-time matching, payment
            processing, and reputation systems. We&rsquo;ve built marketplaces
            that handle millions of daily transactions with zero downtime.
          </p>
          <div className="pt-4">
            <button className="py-3 px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
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
            Data pipeline architectures using streaming technologies, OLAP
            databases, and machine learning integration. We design systems that
            turn raw data into actionable intelligence in real time.
          </p>
          <div className="pt-4">
            <button className="py-3 px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
              Discover Data Stack <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* <Navbar /> */}

      {/* HERO SECTION */}
      <section className="mt-16 lg:mt-[72px] py-12 md:py-[60px] pb-24 md:pb-[120px] px-5 md:px-10 bg-transparent relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="font-montserrat text-3xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary uppercase">
              INNOVATION MEETS{" "}
              <span className="text-accent-crimson">EXCELLENCE</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed md:leading-[1.8] text-text-secondary max-w-[650px]">
              Welcome to Barkaat Software Solutions. We specialize in crafting
              cutting-edge software solutions tailored to meet the diverse needs
              of our clients. With a dedicated team of industry experts, we push
              the boundaries of what's possible in the digital realm. From
              custom software development to AI-driven solutions.
            </p>
            <Link href="/contact">
              <button className="absolute z-[100] inline-flex items-center gap-3 py-2.5 px-[13px] bg-accent-crimson text-text-primary border-none rounded-2xl text-sm md:text-base font-bold cursor-pointer transition-all duration-300 font-montserrat uppercase tracking-wider w-fit hover:bg-accent-crimson-light hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.4)]">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* TELEMETRY RIBBON */}
      <TelemetryRibbon stats={telemetryStats} />

      {/* SCALE DOMAINS TAB SECTION */}
      <Tabs tabs={scaleDomainsTabs} title="Scale Domains" />

      {/* SERVICES OVERVIEW SECTION */}
      <ServicesSection />

      {/* CTA SECTION */}
      <section className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-800 border-t border-border-primary">
        <div className="max-w-[1400px] px-5 md:px-10 text-center max-w-2xl mx-auto">
          <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[48px] font-extrabold text-text-primary mb-12 uppercase tracking-[-0.5px]">
            Ready to Scale?
          </h2>
          <p className="text-base md:text-lg text-text-secondary mb-8 leading-relaxed max-w-[800px] mx-auto">
            Let&rsquo;s discuss your engineering challenges and build the system
            that powers the next generation of your product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact">
              <button className="py-4 px-8 bg-accent-crimson text-text-primary border-none rounded-2xl text-lg font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
                Start Project <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/work">
              <button className="py-4 px-8 bg-obsidian-800 text-text-secondary border border-border-primary rounded-2xl text-lg font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:border-accent-crimson hover:text-accent-crimson">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
    </>
  );
}
