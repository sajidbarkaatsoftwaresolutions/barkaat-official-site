"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/process", label: "Process" },
  { href: "/clients", label: "Clients" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neural-crimson to-neural-crimson-light flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <span className="navbar-logo-text hidden md:block">BARKAAT</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-nav hidden lg:flex">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`navbar-nav-link ${
              pathname === item.href ? "active" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* CTA & Mobile Menu */}
      <div className="navbar-cta">
        <Link href="/contact">
          <button className="navbar-cta-button hidden md:block">
            START PROJECT
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-text-secondary" />
          ) : (
            <Menu className="w-6 h-6 text-text-secondary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-obsidian-800 border-b border-border-primary py-4 lg:hidden">
          <div className="flex flex-col gap-2 px-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-accent-crimson text-white"
                    : "text-text-secondary hover:bg-obsidian-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="block">
              <button className="w-full mt-4 py-2 bg-accent-crimson text-white rounded-lg font-semibold transition-all hover:bg-accent-crimson-light">
                Start Project
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
