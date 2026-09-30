"use client";

import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-obsidian-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
