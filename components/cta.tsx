"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "motion/react";
import Link from "next/link";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

const BackgroundGrid = ({ className }: { className?: string }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden rounded-[1.5rem]", className)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        className="absolute h-full w-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(200,169,106,0.14) 0%, rgba(11,31,58,0.08) 35%, rgba(11,31,58,0.02) 70%, transparent 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,169,106,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,0.16) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </motion.div>
    </div>
  );
};

const LineGradient = ({ position }: { position: "left" | "right" }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    }
  }, [controls, inView]);

  const path =
    position === "left"
      ? "M1 0.23938V207.654L88 285.695C88 285.695 87.5 493.945 88 567.813"
      : "M88 0.23938V207.654L1 285.695C1 285.695 1.5 493.945 1 567.813";

  return (
    <svg
      ref={ref}
      className={`absolute hidden lg:block ${position}-0 h-full`}
      xmlns="http://www.w3.org/2000/svg"
      width="89"
      height="568"
      viewBox="0 0 89 568"
      fill="none"
    >
      <motion.path
        d={path}
        stroke="url(#animation_gradient)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={controls}
      />
      <motion.path d={path} stroke={`url(#paint0_linear_${position})`} strokeWidth="1.5" />
      <defs>
        <motion.linearGradient
          id="animation_gradient"
          initial={{ x1: 0, y1: 0, x2: 0, y2: 0 }}
          animate={{ x1: 0, y1: "120%", x2: 0, y2: "100%" }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8A96A" stopOpacity="0" />
          <stop offset="0.45" stopColor="#C8A96A" />
          <stop offset="1" stopColor="#0B1F3A" stopOpacity="0" />
        </motion.linearGradient>

        <linearGradient
          id={`paint0_linear_${position}`}
          x1={position === "left" ? "1" : "88"}
          y1="4.50012"
          x2={position === "left" ? "1" : "88"}
          y2="568"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8A96A" stopOpacity="0.18" />
          <stop offset="0.78" stopColor="#C8A96A" stopOpacity="0.55" />
          <stop offset="1" stopColor="#C8A96A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default function CTA() {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
  }, [controls, inView]);

  return (
    <section className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
      <LineGradient position="left" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="relative z-10 mx-auto w-full max-w-5xl rounded-[1.75rem] border border-[#C8A96A]/20 bg-white/95 px-6 py-14 text-center shadow-[0_12px_40px_rgba(11,31,58,0.10)] dark:border-[#C8A96A]/15 dark:bg-[#102746] md:px-10 md:py-20 lg:px-16"
      >
        <BackgroundGrid className="z-0" />

        <div className="relative z-20 mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
            Let’s Connect
          </p>

          <Heading
            className={cn(
              "inline-block bg-gradient-to-b from-[#0B1F3A] via-[#1A3154] to-[#0B1F3A] bg-clip-text px-2 text-3xl font-semibold text-transparent dark:from-[#F8FAFC] dark:via-[#E8D8B3] dark:to-[#F8FAFC] md:text-4xl lg:text-5xl"
            )}
          >
            Meaningful growth, lasting impact, and shared success starts with a conversation.
          </Heading>

          <Subheading className="mx-auto my-8 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-base">
            Whether you are exploring real estate opportunities, strategic
            guidance, mentorship, or partnership, Lorraine Productions LLC
            welcomes purposeful conversations that create lasting impact.
          </Subheading>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative z-20"
          >
            <Button
              className="shadow-brand"
            >
            <Link href="/contact">Start the Conversation</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <LineGradient position="right" />
    </section>
  );
}