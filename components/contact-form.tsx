"use client"
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [submissionBlocked, setSubmissionBlocked] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (formData.name.trim().length === 0) {
      newErrors.name = 'Name is required.';
    }
    if (formData.email.trim().length === 0) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (formData.message.trim().length <= 9) {
      newErrors.message = 'Message must be longer than 9 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {

      await fetch('https://6816fc46038b3682c7f3.nyc.appwrite.run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, lp: true }),
        mode: 'no-cors',
      });

        setSuccess(true);
        setSubmissionBlocked(true); // Block further submissions
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        setErrors({});
      
      
    } catch (error) {
      console.error('Error sending form data:', error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const socials = [
      {
      name: "LinkedIn",
      icon:<IconBrandLinkedin />,
      href: "https://www.linkedin.com/in/sophiashoate/",
    }
  ];

  return (
  <Container className="grid grid-cols-1 gap-10 px-6 py-32 md:grid-cols-2 md:py-48">
    <div className="flex flex-col justify-top">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
        Contact
      </p>

      <Heading className="text-left text-[#0B1F3A] dark:text-white">
        Let’s Build Something Meaningful
      </Heading>

      <Subheading className="mt-4 max-w-xl text-left text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-base">
        Whether you are exploring real estate opportunities, business guidance,
        mentorship, or strategic partnerships, Lorraine Productions LLC welcomes
        purposeful conversations that lead to lasting impact.
      </Subheading>

      <div className="mt-10 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A96A]">
            Email
          </p>
          <p className="mt-1 text-sm font-medium text-[#0B1F3A] dark:text-white">
            sophiashoate@gmail.com
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A96A]">
            Phone
          </p>
          <p className="mt-1 text-sm font-medium text-[#0B1F3A] dark:text-white">
            +1 803 960 2834
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A96A]">
            LinkedIn
          </p>
          <div className="mt-3 flex items-center gap-3">
            {socials.map((link) => (
              <Link
                key={link.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A96A]/25 bg-white text-[#0B1F3A] transition duration-200 hover:bg-[#C8A96A]/10 dark:border-[#C8A96A]/20 dark:bg-[#102746] dark:text-white"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-[1.25rem] border border-[#C8A96A]/20 bg-white/95 p-5 shadow-[0_12px_40px_rgba(11,31,58,0.10)] dark:border-[#C8A96A]/15 dark:bg-[#102746] md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C8A96A]/10 via-transparent to-[#0B1F3A]/5 dark:from-[#C8A96A]/10 dark:via-transparent dark:to-white/5" />

      <div className="relative z-20 mb-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
          Send a Message
        </p>
        <h3 className="mt-2 text-xl font-bold text-[#0B1F3A] dark:text-white">
          Start the Conversation
        </h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Share a few details below and we’ll be in touch.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-20 w-full">
        <div className="mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-[#0B1F3A] dark:text-white"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            disabled={loading || submissionBlocked}
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="h-11 w-full rounded-lg border border-[#C8A96A]/20 bg-[#f8f5ef] px-4 text-sm text-[#0B1F3A] placeholder:text-neutral-500 outline-none transition focus:ring-2 focus:ring-[#C8A96A]/40 dark:border-white/10 dark:bg-[#0B1F3A] dark:text-white dark:placeholder:text-neutral-400"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-[#0B1F3A] dark:text-white"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            disabled={loading || submissionBlocked}
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="h-11 w-full rounded-lg border border-[#C8A96A]/20 bg-[#f8f5ef] px-4 text-sm text-[#0B1F3A] placeholder:text-neutral-500 outline-none transition focus:ring-2 focus:ring-[#C8A96A]/40 dark:border-white/10 dark:bg-[#0B1F3A] dark:text-white dark:placeholder:text-neutral-400"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-[#0B1F3A] dark:text-white"
            htmlFor="phone"
          >
            Phone Number <span className="text-neutral-500">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            disabled={loading || submissionBlocked}
            placeholder="Include country code"
            value={formData.phone}
            onChange={handleChange}
            className="h-11 w-full rounded-lg border border-[#C8A96A]/20 bg-[#f8f5ef] px-4 text-sm text-[#0B1F3A] placeholder:text-neutral-500 outline-none transition focus:ring-2 focus:ring-[#C8A96A]/40 dark:border-white/10 dark:bg-[#0B1F3A] dark:text-white dark:placeholder:text-neutral-400"
          />
        </div>

        <div className="mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-[#0B1F3A] dark:text-white"
            htmlFor="company"
          >
            Company <span className="text-neutral-500">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            disabled={loading || submissionBlocked}
            placeholder="Company or organization"
            value={formData.company}
            onChange={handleChange}
            className="h-11 w-full rounded-lg border border-[#C8A96A]/20 bg-[#f8f5ef] px-4 text-sm text-[#0B1F3A] placeholder:text-neutral-500 outline-none transition focus:ring-2 focus:ring-[#C8A96A]/40 dark:border-white/10 dark:bg-[#0B1F3A] dark:text-white dark:placeholder:text-neutral-400"
          />
        </div>

        <div className="mb-5 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-[#0B1F3A] dark:text-white"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            disabled={loading || submissionBlocked}
            placeholder="Tell us a little about what you’re looking for."
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#C8A96A]/20 bg-[#f8f5ef] px-4 pt-4 text-sm text-[#0B1F3A] placeholder:text-neutral-500 outline-none transition focus:ring-2 focus:ring-[#C8A96A]/40 dark:border-white/10 dark:bg-[#0B1F3A] dark:text-white dark:placeholder:text-neutral-400"
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <Button
          onClick={handleSubmit}
          variant="default"
          disabled={loading || submissionBlocked}
          className="bg-[#0B1F3A] px-6 text-white hover:bg-[#102746] dark:bg-[#C8A96A] dark:text-[#0B1F3A] dark:hover:bg-[#d2b06d]"
        >
          {loading ? "Sending..." : submissionBlocked ? "Submitted" : "Submit Inquiry"}
        </Button>

        {success === true && (
          <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
            Form submitted successfully!
          </p>
        )}
        {success === false && (
          <p className="mt-4 text-sm text-red-500">
            Failed to submit the form. Please try again.
          </p>
        )}
      </form>
    </div>
  </Container>
);
};
