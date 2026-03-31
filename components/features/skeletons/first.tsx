import { cn } from "@/lib/utils";
import {
  IconChartBar,
  IconBuildingBank,
  IconTrendingUp,
  IconClock,
} from "@tabler/icons-react";
import React from "react";

export const SkeletonOne = () => {
  return (
    <div className="perspective-distant rotate-z-15 -rotate-y-20 rotate-x-30 scale-[1.2] h-full w-full -translate-y-10 mask-radial-from-50% mask-r-from-50%">
      <SkeletonCard
        className="absolute bottom-0 left-12 max-w-[90%] z-30"
        icon={
          <div className="flex size-7 items-center justify-center rounded-full bg-[#C8A96A]/15 text-[#C8A96A]">
            <IconChartBar className="size-4" />
          </div>
        }
        title="Market Analysis"
        description="Evaluating regional trends, asset performance, and growth indicators to identify high-potential opportunities."
        badge={<Badge text="ACTIVE" variant="gold" />}
        tags={["Market Trends", "Asset Value", "Growth"]}
      />

      <SkeletonCard
        className="absolute bottom-8 left-8 z-20"
        icon={
          <div className="flex size-7 items-center justify-center rounded-full bg-[#0B1F3A]/10 text-[#0B1F3A] dark:bg-white/10 dark:text-white">
            <IconBuildingBank className="size-4" />
          </div>
        }
        title="Portfolio Review"
        description="Reviewing current holdings, long-term value, and strategic alignment to support sustainable decision-making."
        badge={<Badge text="REVIEW" variant="navy" />}
        tags={["Portfolio", "Value", "Strategy"]}
      />

      <SkeletonCard
        className="absolute bottom-20 left-4 max-w-[80%] z-10"
        icon={
          <div className="flex size-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <IconTrendingUp className="size-4" />
          </div>
        }
        title="Opportunity Forecast"
        description="Highlighting projected upside, acquisition potential, and investment pathways backed by thoughtful analysis."
        badge={<Badge text="INSIGHT" variant="success" />}
        tags={["Forecast", "Returns", "Opportunity"]}
      />
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  tags,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  tags: string[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[85%] h-fit my-auto mx-auto w-full rounded-2xl border p-3 shadow-2xl",
        "border-[#C8A96A]/20 bg-white/95 text-[#0B1F3A]",
        "dark:border-[#C8A96A]/15 dark:bg-[#102746] dark:text-white",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-xs md:text-sm font-medium">
          {title}
        </p>
        <div className="ml-auto">{badge}</div>
      </div>

      <p className="mt-3 text-[10px] md:text-sm font-light text-neutral-600 dark:text-neutral-300">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/10 px-2.5 py-1 text-[10px] md:text-xs font-medium text-[#0B1F3A] dark:border-[#C8A96A]/20 dark:bg-[#C8A96A]/10 dark:text-white">
      {text}
    </div>
  );
};

const Badge = ({
  variant = "success",
  text,
}: {
  variant?: "gold" | "navy" | "success";
  text: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-1 rounded-full border px-2 py-1",
        variant === "gold" &&
          "border-[#C8A96A]/30 bg-[#C8A96A]/15 text-[#C8A96A]",
        variant === "navy" &&
          "border-[#0B1F3A]/20 bg-[#0B1F3A]/10 text-[#0B1F3A] dark:border-white/10 dark:bg-white/10 dark:text-white",
        variant === "success" &&
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
      )}
    >
      <IconClock className="size-3" />
      <p className="text-[10px] font-bold tracking-wide">{text}</p>
    </div>
  );
};
