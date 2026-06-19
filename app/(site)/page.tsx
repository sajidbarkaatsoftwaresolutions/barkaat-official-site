import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import NeuralMesh from "../components/NeuralMesh";
import TelemetryRibbon from "../components/home/TelemetryRibbon";
import Tabs, { Tab } from "../components/home/Tabs";
import ServicesSection from "../components/home/ServicesSection";
import { ArrowRight } from "lucide-react";
import Hero from "../components/home/Hero";
import Cta from "../components/home/Cta";

export const metadata: Metadata = {
  title:
    "Barkaat Software Solutions | Engineering High-Scale Digital Ecosystems",
  description:
    "Premium engineering hub delivering cloud-native platforms, high-performance SaaS, and experience-driven systems.",
};

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <TelemetryRibbon />
        <Tabs />
        <ServicesSection />
        <Cta />
      </main>
    </>
  );
}
