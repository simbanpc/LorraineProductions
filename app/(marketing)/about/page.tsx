import React from "react";
import { Metadata } from "next";
import { About } from "@/components/aboutUs";
import CTA from "@/components/cta";

export const metadata: Metadata = {
  title: "Lorraine Productions - About",
  description:
    "Building Legacy. Creating Opportunity. Empowering the Future. Investing. Business Consulting. Mentorship & Leadership.",
  openGraph: {
    title: "Lorraine Productions",
    description: "Building Legacy. Creating Opportunity. Empowering the Future. Investing. Business Consulting. Mentorship & Leadership.",
    siteName: "Lorraine Productions",
    url: ""
  },
  twitter:{
    title: "Lorraine Productions",
    description: "Building Legacy. Creating Opportunity. Empowering the Future. Investing. Business Consulting. Mentorship & Leadership.",
    site: "",
    card: "summary"
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
