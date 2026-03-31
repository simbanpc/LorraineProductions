"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import {
  BadgeCheck,
  BriefcaseBusiness,
  Megaphone,
  Mic,
} from "lucide-react";

export const SkeletonFour = () => {
  const items = [
    {
      title: "Speaking Engagements",
      icon: <Mic className="size-4" />,
      eyebrow: "Public Presence",
      description:
        "Delivering thoughtful, purpose-driven conversations centered on leadership, business growth, real estate, and community impact.",
      tags: ["Keynotes", "Panels", "Leadership", "Business"],
      statLabel: "Formats",
      statValue: "Keynote • Panel • Fireside",
    },
    {
      title: "Community Advocacy",
      icon: <Megaphone className="size-4" />,
      eyebrow: "Community Voice",
      description:
        "Advancing conversations that create access, strengthen communities, and open the door to long-term opportunity and sustainable growth.",
      tags: ["Advocacy", "Access", "Opportunity", "Impact"],
      statLabel: "Focus",
      statValue: "Equity • Access • Growth",
    },
    {
      title: "Business Advocacy",
      icon: <BriefcaseBusiness className="size-4" />,
      eyebrow: "Business & Growth",
      description:
        "Supporting conversations around entrepreneurship, operational growth, and business development with a focus on long-term value and legacy.",
      tags: ["Consulting", "Growth", "Strategy", "Legacy"],
      statLabel: "Themes",
      statValue: "Business • Strategy • Legacy",
    },
  ];

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);
  const [selected, setSelected] = useState(items[0]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const startAutoplay = () => {
    stopAutoplay();

    intervalRef.current = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % items.length;
      setSelected(items[currentIndexRef.current]);
    }, 2500);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleSelect = (item: (typeof items)[number], idx: number) => {
    currentIndexRef.current = idx;
    setSelected(item);
    startAutoplay();
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex max-w-xl flex-wrap items-center justify-center gap-2 mx-auto">
        {items.map((item, idx) => {
          const isActive = selected.title === item.title;

          return (
            <button
              key={item.title}
              onClick={() => handleSelect(item, idx)}
              className={cn(
                "cursor-pointer relative flex items-center justify-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium transition duration-200 active:scale-[0.98]",
                "border-neutral-200 bg-white text-[#0B1F3A] dark:border-white/10 dark:bg-white/5 dark:text-white",
                "hover:border-[#C8A96A]/50 hover:bg-[#C8A96A]/10",
                isActive && "border-[#C8A96A] bg-[#C8A96A]/15 text-[#0B1F3A] dark:text-[#F8FAFC]"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="selected-speaking-item"
                  className="absolute inset-0 rounded-full ring-1 ring-[#C8A96A]/40"
                />
              )}
              <span className="relative z-10 text-[#C8A96A]">{item.icon}</span>
              <span className="relative z-10">{item.title}</span>
            </button>
          );
        })}
      </div>

      <div className="absolute inset-x-0 mx-auto h-full w-full max-w-[20rem] rounded-t-3xl border border-neutral-200 bg-neutral-100 p-2 dark:border-neutral-700 dark:bg-neutral-800 lg:max-w-sm">
        <div className="flex h-full flex-col rounded-[1.4rem] border border-neutral-200/80 bg-white/95 p-4 dark:border-white/10 dark:bg-[#102746]">
          <motion.div
            key={selected.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex h-full flex-col"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                  {selected.eyebrow}
                </p>
                <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white">
                  {selected.title}
                </h3>
              </div>

              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F3A] text-white dark:bg-[#C8A96A] dark:text-[#0B1F3A]">
                {selected.icon}
              </div>
            </div>

            <div className="mb-4 rounded-2xl border border-[#C8A96A]/20 bg-[#C8A96A]/10 p-3 dark:border-[#C8A96A]/20 dark:bg-[#C8A96A]/10">
              <div className="mb-2 flex items-center gap-2 text-[#0B1F3A] dark:text-white">
                <BadgeCheck className="size-4 text-[#C8A96A]" />
                <p className="text-xs font-semibold">Featured Focus</p>
              </div>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {selected.description}
              </p>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-[#0B1F3A] dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-2 gap-2">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-white/10 dark:bg-white/5">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Speaking & Advocacy
                </p>
                <p className="text-sm font-semibold text-[#0B1F3A] dark:text-white">
                  Leadership Through Presence
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-white/10 dark:bg-white/5">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  {selected.statLabel}
                </p>
                <p className="text-sm font-semibold text-[#0B1F3A] dark:text-white">
                  {selected.statValue}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  tags,
  className,
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  tags: { text: string; icon: React.ReactNode }[];
  className?: string;
}) => {
  return (
    <motion.div
      key={title}
      className="p-4 shadow-black/10 gap-4 border bg-white dark:bg-neutral-900 border-transparent ring-1 rounded-[16px] ring-black/10 flex items-start flex-col"
    >
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            "size-6 shrink-0 rounded-full flex mt-1 items-center justify-center",
            className
          )}
        >
          {topIcon}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.1,
          }}
          className="text-lg font-bold text-neutral-800 dark:text-neutral-200"
        >
          {title}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-base text-neutral-600">Tone Guidelines</p>
        <p className="text-sm mt-2 mb-4 text-neutral-600 dark:text-neutral-400 rounded-sm border border-neutral-200 dark:border-neutral-200/10 px-2 border-dashed py-1">
          {description}
        </p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <motion.div
              key={tag.text + idx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <Tag key={tag.text + idx} text={tag.text} icon={tag.icon} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-1 w-fit rounded-sm px-1 py-0.5 border border-neutral-200 dark:border-neutral-200/10 text-sm">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
