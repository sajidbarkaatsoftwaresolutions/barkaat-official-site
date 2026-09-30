"use client";

import Link from "next/link";
import { MessageSquare, Archive, Handshake, ArrowRight } from "lucide-react";

/**
 * Presents the contact form and opens a prefilled message in the visitor's
 * email client so the statically hosted site does not require a server runtime.
 */
export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const company = String(formData.get("company") ?? "");
    const subject = String(formData.get("subject") ?? "Project inquiry");
    const message = String(formData.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:hello@barkaat.dev?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="mt-16 lg:mt-[72px] py-12 md:py-[60px] pb-24 md:pb-[120px] px-5 md:px-10 bg-transparent relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="font-montserrat text-3xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary uppercase">
              START A CONVERSATION ABOUT YOUR{" "}
              <span className="text-accent-crimson">NEXT RELEASE</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed md:leading-[1.8] text-text-secondary max-w-[650px]">
              Share a short brief, and we&rsquo;ll respond with concrete next
              steps, timelines, and how we&rsquo;d approach your problem. No
              lengthy processes— just pragmatic engineering discussions.
            </p>
          </div>

          <div className="relative h-[300px] lg:h-[500px] hidden lg:block" />
        </div>
      </section>

      {/* ENGAGEMENT TYPES */}
      <section className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-900">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[48px] font-extrabold text-text-primary mb-16 uppercase tracking-[-0.5px]">
            How We Work Together
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-obsidian-800 border border-border-primary rounded-2xl p-8 transition-all duration-200 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent-crimson bg-opacity-10 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-accent-crimson" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">
                Project Briefs
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Have a new product, refactor, or integration in mind? Share a
                brief description, target dates, and constraints. We&rsquo;ll
                put together a proposal.
              </p>
            </div>

            <div className="bg-obsidian-800 border border-border-primary rounded-2xl p-8 transition-all duration-200 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent-crimson bg-opacity-10 rounded-lg">
                  <Archive className="w-6 h-6 text-accent-crimson" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">
                Architecture Reviews
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                We can review your current stack, identify risks, and propose
                pragmatic improvements. A second opinion from experienced
                architects.
              </p>
            </div>

            <div className="bg-obsidian-800 border border-border-primary rounded-2xl p-8 transition-all duration-200 hover:border-accent-crimson hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.1)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent-crimson bg-opacity-10 rounded-lg">
                  <Handshake className="w-6 h-6 text-accent-crimson" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">
                Long-Term Partnerships
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Looking for an ongoing engineering partner? We embed senior
                architects and engineers directly in your org for sustained
                delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-800 border-y border-border-primary">
        <div className="max-w-[1400px] px-5 md:px-10 max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[48px] font-extrabold text-text-primary mb-12 uppercase tracking-[-0.5px]">
              Send us a Message
            </h2>
            <p className="text-base md:text-lg text-text-secondary mb-8 leading-relaxed max-w-[800px] mx-auto">
              We&rsquo;ll review your brief and get back to you within 48 hours
              with next steps.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 mb-6">
                <label className="text-[13px] font-semibold text-text-primary uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="bg-obsidian-700 border border-border-primary rounded-xl py-3 px-4 text-text-secondary text-sm font-poppins transition-all duration-200 focus:outline-none focus:border-accent-crimson focus:shadow-[0_0_0_3px_rgba(211,65,78,0.1)] placeholder:text-text-soft"
                />
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="text-[13px] font-semibold text-text-primary uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@company.com"
                  required
                  className="bg-obsidian-700 border border-border-primary rounded-xl py-3 px-4 text-text-secondary text-sm font-poppins transition-all duration-200 focus:outline-none focus:border-accent-crimson focus:shadow-[0_0_0_3px_rgba(211,65,78,0.1)] placeholder:text-text-soft"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label className="text-[13px] font-semibold text-text-primary uppercase tracking-wider">
                Company
              </label>
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                className="bg-obsidian-700 border border-border-primary rounded-xl py-3 px-4 text-text-secondary text-sm font-poppins transition-all duration-200 focus:outline-none focus:border-accent-crimson focus:shadow-[0_0_0_3px_rgba(211,65,78,0.1)] placeholder:text-text-soft"
              />
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label className="text-[13px] font-semibold text-text-primary uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="e.g., SaaS Platform Refactor, Architecture Review"
                className="bg-obsidian-700 border border-border-primary rounded-xl py-3 px-4 text-text-secondary text-sm font-poppins transition-all duration-200 focus:outline-none focus:border-accent-crimson focus:shadow-[0_0_0_3px_rgba(211,65,78,0.1)] placeholder:text-text-soft"
              />
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label className="text-[13px] font-semibold text-text-primary uppercase tracking-wider">
                Tell us about your project
              </label>
              <textarea
                name="message"
                placeholder="Share your challenge, goals, timeline, and any specific constraints..."
                rows={6}
                required
                className="bg-obsidian-700 border border-border-primary rounded-xl py-3 px-4 text-text-secondary text-sm font-poppins min-h-[140px] resize-vertical transition-all duration-200 focus:outline-none focus:border-accent-crimson focus:shadow-[0_0_0_3px_rgba(211,65,78,0.1)] placeholder:text-text-soft"
              />
            </div>

            <button
              type="submit"
              className="py-4 px-8 bg-accent-crimson text-text-primary border-none rounded-2xl text-lg font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)] w-full py-3"
            >
              Send
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
