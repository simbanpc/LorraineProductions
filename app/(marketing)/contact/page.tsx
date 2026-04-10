import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Lorraine Productions - Contact",
  description:
    "Building Legacy. Creating Opportunity. Empowering the Future. Investing. Business Consulting. Mentorship & Leadership.",
  openGraph: {
    type: "website",
    title: "Lorraine Productions",
    description: "Building Legacy. Creating Opportunity. Empowering the Future. Investing. Business Consulting. Mentorship & Leadership.",
    siteName: "Lorraine Productions",
    url: "https://lorraineproductions.com",
    images: [{
    url: "https://api.npc.nexus/v1/storage/buckets/657a567ac07788d7c486/files/HDOGTEAL/view?project=npcnexus",
  }],
  },
  twitter:{
    title: "Lorraine Productions",
    description: "Building Legacy. Creating Opportunity. Empowering the Future. Investing. Business Consulting. Mentorship & Leadership.",
    site: "https://lorraineproductions.com",
    card: "summary",
    images: [{
    url: "https://api.npc.nexus/v1/storage/buckets/657a567ac07788d7c486/files/HDOGTEAL/view?project=npcnexus",
  }],
  }
};

export default function ContactPage() {
  return (
   <div className="relative overflow-hidden">
      <ContactForm />
    </div>
  );
}
