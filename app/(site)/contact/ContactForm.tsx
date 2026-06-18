"use client";

import { useState } from "react";
import Link from "next/link";
import { sendEmail } from "@/app/actions/sendEmail";
import { MessageSquare, Archive, Handshake, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await sendEmail(formData);
      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">
              START A CONVERSATION ABOUT YOUR <span className="hero-title-accent">NEXT RELEASE</span>
            </h1>
            <p className="hero-description">
              Share a short brief, and we&rsquo;ll respond with concrete next steps, 
              timelines, and how we&rsquo;d approach your problem. No lengthy processes—
              just pragmatic engineering discussions.
            </p>
          </div>

          <div className="hero-right hidden lg:block" />
        </div>
      </section>

      {/* ENGAGEMENT TYPES */}
      <section className="section">
        <div className="container">
          <h2 className="section-title mb-16">How We Work Together</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent-crimson bg-opacity-10 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-accent-crimson" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">
                Project Briefs
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Have a new product, refactor, or integration in mind? Share a brief 
                description, target dates, and constraints. We&rsquo;ll put together a proposal.
              </p>
            </div>

            <div className="card">
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
                pragmatic improvements. A second opinion from experienced architects.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent-crimson bg-opacity-10 rounded-lg">
                  <Handshake className="w-6 h-6 text-accent-crimson" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">
                Long-Term Partnerships
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Looking for an ongoing engineering partner? We embed senior architects 
                and engineers directly in your org for sustained delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section bg-obsidian-800 border-y border-border-primary">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Send us a Message</h2>
            <p className="section-subtitle">
              We&rsquo;ll review your brief and get back to you within 48 hours with next steps.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@company.com"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="e.g., SaaS Platform Refactor, Architecture Review"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tell us about your project</label>
              <textarea
                name="message"
                placeholder="Share your challenge, goals, timeline, and any specific constraints..."
                rows={6}
                required
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full text-lg py-3"
            >
              {loading ? "Sending..." : "Send Brief"} 
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>

            {success && (
              <div className="p-4 bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 rounded-lg text-green-400 text-center font-semibold">
                ✓ Message sent! We&rsquo;ll get back to you within 48 hours.
              </div>
            )}
          </form>
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
