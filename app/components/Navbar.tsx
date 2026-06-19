"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  // { href: "/solutions", label: "Solutions" },
  // { href: "/process", label: "Process" },
  { href: "/clients", label: "Clients" },
  { href: "/work", label: "Work" },
  // { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 h-16 lg:h-[72px] bg-[var(--bg-navbar)] backdrop-blur-xl border-b border-border-primary z-50 flex items-center justify-between px-4 md:px-6 lg:px-10 gap-6 lg:gap-10">
      {/* Logo */}
      <div className="flex items-center gap-3 shrink-0">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/barkaat_software_solutions_logo.jpg"
            alt="Barkaat Software Solutions Logo"
            width={40}
            height={40}
            className="rounded-full object-cover border-2 border-border-primary"
          />
          <span className="font-montserrat text-base font-bold text-text-primary tracking-[-0.5px] hidden md:block">
            BARKAAT SOFTWARE SOLUTIONS
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[13px] font-medium text-text-secondary no-underline transition-colors duration-200 relative hover:text-accent-crimson after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:bg-accent-crimson after:transition-[width] after:duration-200 ${
              pathname === item.href || pathname.startsWith(item.href + "/")
                ? "text-accent-crimson after:w-full"
                : "after:w-0"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <ThemeToggle />
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
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "bg-accent-crimson text-white"
                    : "text-text-secondary hover:bg-obsidian-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
