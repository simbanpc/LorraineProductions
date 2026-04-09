"use client";
import { Building2, FileSearch, Handshake, MapPin, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const SkeletonOne = () => {
  const focusAreas = [
    {
      title: "Housing Development",
      description:
        "Creating safe, quality housing solutions that support families and strengthen communities over the long term.",
      icon: <Building2 className="size-4" />,
    },
    {
      title: "Community Revitalization",
      description:
        "Investing in underserved areas through thoughtful real estate strategies that encourage local growth and lasting impact.",
      icon: <TrendingUp className="size-4" />,
    },
    {
      title: "Strategic Acquisitions",
      description:
        "Evaluating aligned opportunities with a disciplined approach to portfolio growth, value creation, and community fit.",
      icon: <FileSearch className="size-4" />,
    },
  ];

  const approach = [
    {
      title: "Identify",
      description: "Target opportunities aligned with long-term vision",
      icon: <MapPin className="size-4" />,
    },
    {
      title: "Assess",
      description: "Review potential through value, impact, and fit",
      icon: <FileSearch className="size-4" />,
    },
    {
      title: "Develop",
      description: "Execute with quality, sustainability, and purpose",
      icon: <Handshake className="size-4" />,
    },
  ];

  return (
    <div className="flex-1 rounded-t-3xl flex flex-col border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 mx-auto w-full h-full absolute inset-x-10 inset-y-2 p-3 overflow-hidden">
      <div className="flex h-full min-h-0 flex-col rounded-[1.25rem] border border-neutral-200/80 dark:border-white/10 bg-white/90 dark:bg-[#102746] overflow-hidden">
        <div className="flex-1 border-b border-neutral-200 dark:border-white/10 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              Focus Areas
            </p>
            <div className="h-px w-16 bg-[#C8A96A]/50" />
          </div>

          <div className="grid grid-cols-1 gap-2">
            {focusAreas.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 p-3"
              >
                <div className="mb-2 flex items-center gap-2 text-[#C8A96A]">
                  {item.icon}
                  <p className="text-sm font-semibold text-[#0B1F3A] dark:text-white">
                    {item.title}
                  </p>
                </div>
                <p className="text-[12px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              Approach
            </p>
            <div className="h-px w-16 bg-[#C8A96A]/50" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {approach.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 p-2"
              >
                <div className="mb-2 flex items-center gap-2 text-[#C8A96A]">
                  {step.icon}
                  <p className="text-xs font-semibold text-[#0B1F3A] dark:text-white">
                    {step.title}
                  </p>
                </div>
                <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = ({
  children,
  className,
  containerClassName,
  src,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  src?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-full aspect-square justify-self-center rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800 p-[1px]",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-neutral)]/10",
        className
      )}
    >
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 0.8 + 0.2,
        }}
        className={cn(
           "flex items-center justify-center w-full h-full rounded-[12px] p-[1px] relative z-10",
          src && "bg-gradient-to-br from-[#C8A96A] via-transparent to-[#C8A96A]",
          containerClassName
        )}
      >
        {children ?? (
          <>
            {src && (
              <div className="flex h-full w-full items-center justify-center rounded-[12px] bg-neutral-400 p-1.5 dark:bg-neutral-400">
                <Image
                  src={src}
                  height={160}
                  width={160}
                  alt="item"
                  className="relative z-20 h-auto max-h-full w-auto max-w-full object-contain"
                />
              </div>
            )}
          </>
        )}
      </motion.div>

      <div className="absolute inset-0 rounded-xl bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:5px_5px] bg-fixed" />
    </div>
  );
};