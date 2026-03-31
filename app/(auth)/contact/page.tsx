import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Lorraine Productions - Contact",
  description:
    "Building Legacy. Creating Opportunity. Empowering the Future. Real Estate. Business Consulting. Mentorship & Leadership.",
  openGraph: {
    title: "Lorraine Productions",
    description: "Building Legacy. Creating Opportunity. Empowering the Future. Real Estate. Business Consulting. Mentorship & Leadership.",
    siteName: "Lorraine Productions",
    url: ""
  },
  twitter:{
    title: "Lorraine Productions",
    description: "Building Legacy. Creating Opportunity. Empowering the Future. Real Estate. Business Consulting. Mentorship & Leadership.",
    site: "",
    card: "summary"
  }
};

export default function ContactPage() {
  return (
   <div className="relative overflow-hidden">
      <ContactForm />
    </div>
  );
}
