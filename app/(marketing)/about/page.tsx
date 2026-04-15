import React from "react";
import { Metadata } from "next";
import { About } from "@/components/aboutUs";
import CTA from "@/components/cta";

export const metadata: Metadata = {
  title: "Lorraine Productions - About",
  description:
    "Building Legacy. Creating Opportunity. Empowering the Future. Investing. Business Consulting. Mentorship & Leadership.",
  openGraph: {
    type: "website",
    title: "Lorraine Productions",
    description: "Building Legacy. Creating Opportunity. Empowering the Future. Investing. Business Consulting. Mentorship & Leadership.",
    siteName: "Lorraine Productions",
    url: "https://lorraineproductions.com",
    images: [{
    url: "/LorraineProductions3.png",
  }],
  },
  twitter:{
    title: "Lorraine Productions",
    description: "Building Legacy. Creating Opportunity. Empowering the Future. Investing. Business Consulting. Mentorship & Leadership.",
    site: "https://lorraineproductions.com",
    card: "summary",
    images: [{
    url: "/LorraineProductions3.png",
  }],
  }
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <About />
      <CTA />
    </div>
  );
}
