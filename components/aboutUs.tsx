"use client"
import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Container } from "./container";
import Image from "next/image";
import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export const About = () => {
  const socials = [
      {
      name: "LinkedIn",
      icon:<IconBrandLinkedin />,
      href: "https://www.linkedin.com/in/sophiashoate/",
    }
  ];
  return (
    <>
      <Container className="grid grid-cols-1 gap-10 px-6 pb-20 md:grid-cols-2 md:pb-28 pt-10 md:pt-20 lg:pt-32">
        <div className="flex flex-col justify-center md:pr-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
            Meet the vision
          </p>

          <Heading className="text-left text-[#0B1F3A] dark:text-white">
            The Heart of Strategy
          </Heading>

          <Subheading className="mt-4 text-left text-base leading-relaxed">
            Meet Sophia Shoate, Founder & Chief Executive Officer
          </Subheading>

          <div>
            <div className="mt-4 flex items-center gap-3">
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

          <Subheading className="mt-4 text-left text-base leading-relaxed">
            Strategist. Visionary. Impact Driven
          </Subheading>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-inter max-w-xl md:text-base">
            Sophia Shoate is a seasoned executive and business leader with a proven track record of driving growth, leading transformation, and building high-performing organizations. She is committed to creating opportunities, developing leaders, and delivering lasting impact.
          </p>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-inter max-w-xl md:text-base">
            Lorraine Productions LLC is rooted in purpose, vision, and the belief
            that meaningful growth begins with strong foundations. Through real
            estate, consulting, mentorship, and community engagement, the work is
            centered on building legacy, creating opportunity, and empowering the
            future.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-inter max-w-xl md:text-base">
            With a thoughtful approach to leadership and investment, every
            initiative is guided by strategy, impact, and a commitment to
            creating lasting value for individuals, businesses, and communities.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/10 px-3 py-1 text-xs font-medium text-[#0B1F3A] dark:border-[#C8A96A]/20 dark:bg-[#C8A96A]/10 dark:text-white">
              Investing
            </span>
            <span className="rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/10 px-3 py-1 text-xs font-medium text-[#0B1F3A] dark:border-[#C8A96A]/20 dark:bg-[#C8A96A]/10 dark:text-white">
              Consulting
            </span>
            <span className="rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/10 px-3 py-1 text-xs font-medium text-[#0B1F3A] dark:border-[#C8A96A]/20 dark:bg-[#C8A96A]/10 dark:text-white">
              Mentorship
            </span>
            <span className="rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/10 px-3 py-1 text-xs font-medium text-[#0B1F3A] dark:border-[#C8A96A]/20 dark:bg-[#C8A96A]/10 dark:text-white">
              Advocacy
            </span>
          </div>
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-2xl overflow-hidden rounded-[1.25rem] border border-[#C8A96A]/20 bg-white/95 p-3 shadow-[0_12px_40px_rgba(11,31,58,0.10)] dark:border-[#C8A96A]/15 dark:bg-[#102746]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C8A96A]/10 via-transparent to-[#0B1F3A]/5 dark:from-[#C8A96A]/10 dark:via-transparent dark:to-white/5" />
          <div className="relative z-10 min-h-[520px] w-full overflow-hidden rounded-[1rem] border border-[#C8A96A]/15">
            <Image
              src={"/founderPFP.avif"}
              fill
              className="object-cover object-top"
              alt="Founder portrait"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
