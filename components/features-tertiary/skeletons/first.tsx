"use client";

import {
  CogIcon,
  ErrorIcon,
  FileIcon,
  HubspotIcon,
  SalesforceIcon,
  SheetsIcon,
} from "@/icons";
import {
  FifthIcon,
  FirstIcon,
  FourthIcon,
  RecentActivityIcon,
  SecondIcon,
  ThirdIcon,
} from "@/icons/bento-icons";
import { cn } from "@/lib/utils";
import { IconClock } from "@tabler/icons-react";
import { BadgeDollarSign, Building2, FileSearch, Handshake, KeyRound, MapPin, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export const SkeletonOne = () => {
  const metrics = [
    {
      label: "Properties Reviewed",
      value: "48",
      icon: <Building2 className="size-4" />,
    },
    {
      label: "Active Acquisitions",
      value: "06",
      icon: <FileSearch className="size-4" />,
    },
    {
      label: "Closed Deals",
      value: "12",
      icon: <KeyRound className="size-4" />,
    },
  ];

  const opportunities = [
    {
      title: "Atlanta Multi-Family",
      subtitle: "24 Units • Georgia",
      icon: <Building2 className="size-4" />,
      badge: "Underwriting",
      badgeClassName:
        "bg-[#C8A96A]/15 text-[#C8A96A] border border-[#C8A96A]/30",
    },
    {
      title: "Mixed-Use Redevelopment",
      subtitle: "West End • Opportunity Zone",
      icon: <TrendingUp className="size-4" />,
      badge: "Reviewing",
      badgeClassName:
        "bg-[#0B1F3A]/10 text-[#0B1F3A] dark:bg-white/10 dark:text-white border border-[#0B1F3A]/15 dark:border-white/10",
    },
    {
      title: "Commercial Acquisition",
      subtitle: "South Metro • Value Add",
      icon: <BadgeDollarSign className="size-4" />,
      badge: "Acquired",
      badgeClassName:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
    },
  ];

  const pipeline = [
    {
      title: "Source",
      description: "Identify aligned opportunities",
      icon: <MapPin className="size-4" />,
    },
    {
      title: "Evaluate",
      description: "Assess value, risk, and fit",
      icon: <FileSearch className="size-4" />,
    },
    {
      title: "Acquire",
      description: "Execute with long-term vision",
      icon: <Handshake className="size-4" />,
    },
  ];

  return (
    <div className="flex-1 rounded-t-3xl flex flex-col border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 mx-auto w-full h-full absolute inset-x-10 inset-y-2 p-3 overflow-hidden">
      <div className="flex h-full flex-col rounded-[1.25rem] border border-neutral-200/80 dark:border-white/10 bg-white/90 dark:bg-[#102746]">
        <div className="grid grid-cols-3 gap-2 border-b border-neutral-200 dark:border-white/10 p-3">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 p-2"
            >
              <div className="mb-2 flex items-center gap-2 text-[#0B1F3A] dark:text-[#C8A96A]">
                {item.icon}
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  {item.label}
                </span>
              </div>
              <p className="text-lg font-bold text-[#0B1F3A] dark:text-white">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex-1 space-y-2 p-3">
          {opportunities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="flex items-center justify-between rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#0B1F3A] text-white dark:bg-[#C8A96A] dark:text-[#0B1F3A]">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[#0B1F3A] dark:text-white">
                    {item.title}
                  </p>
                  <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div
                className={`ml-3 rounded-md px-2 py-1 text-[10px] font-semibold ${item.badgeClassName}`}
              >
                {item.badge}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-neutral-200 dark:border-white/10 p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              Acquisition Pipeline
            </p>
            <div className="h-px w-16 bg-[#C8A96A]/50" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {pipeline.map((step, idx) => (
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

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow-black/10 gap-4 border bg-white dark:bg-neutral-900 border-transparent ring-1 rounded-tl-[16px] ring-black/10 flex flex-col items-start flex-1">
      <div className="flex items-center gap-2 border-b w-full py-2 px-4">
        <RecentActivityIcon />
        <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
          Recent Activity
        </p>
      </div>

      {children}
    </div>
  );
};

const CardItem = ({
  icon,
  iconClassName,
  title,
  description,
  badge,
  index,
}: {
  icon: React.ReactNode;
  iconClassName?: string;
  title: string;
  description: string;
  badge: React.ReactNode;
  index: number;
}) => {
  return (
    <div className="flex justify-between items-center  w-full pl-4 relative overflow-hidden">
      <div className=" items-center gap-2 flex">
        <div
          className={cn(
            "size-5 rounded-sm bg-blue-500 text-white flex items-center justify-center",
            iconClassName
          )}
        >
          {icon}
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {title}
        </p>
        {badge}
      </div>
      <motion.p className="text-sm text-neutral-500 dark:text-neutral-400 flex-nowrap max-w-[16rem] w-full text-left whitespace-nowrap">
        {description.split("").map((item, idx) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.01 + index * 0.1 }}
            key={idx}
          >
            {item}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-1 w-fit rounded-sm px-1 py-0.5 border border-neutral-200 text-sm">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
