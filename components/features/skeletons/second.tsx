import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconCircleDashedCheck,
  IconLoader2,
  IconRipple,
} from "@tabler/icons-react";
import React from "react";

export const SkeletonTwo = () => {
  return (
    <div
      style={{
        transform: "rotateY(18deg) rotateX(18deg) rotateZ(-16deg)",
      }}
      className={cn(
        "max-w-[85%] group h-full my-auto mx-auto w-full p-3 rounded-2xl border shadow-2xl flex flex-col mask-radial-from-50% mask-b-from-50%",
        "translate-x-8 bg-[#f8f5ef] dark:bg-[#0F2747] border-[#C8A96A]/25 dark:border-[#C8A96A]/20",
        "[--pattern-fg:#0B1F3A]/[0.06] dark:[--pattern-fg:#ffffff]/[0.08]"
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="flex size-7 items-center justify-center rounded-full bg-[#C8A96A]/15 text-[#C8A96A]">
          <IconCircleDashedCheck className="size-4" />
        </div>
        <p className="text-sm font-medium text-[#0B1F3A] dark:text-white">
          Opportunity
        </p>
      </div>

      <div className="relative flex-1 mt-4 rounded-2xl border border-[#C8A96A]/20 bg-[#efe7d8] dark:bg-[#102746] dark:border-[#C8A96A]/15">
        <Pattern />

        <div className="absolute inset-0 h-full w-full rounded-2xl translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300 bg-white dark:bg-[#0B1F3A]">
          <Row
            icon={<IconCheck className="size-3 stroke-white" />}
            text="Identify potential"
            pill="Discover"
          />
          <GradientHr />

          <Row
            icon={<IconCheck className="size-3 stroke-white" />}
            text="Evaluate aligned pathways"
            pill="Assess"
          />
          <GradientHr />

          <Row
            icon={<IconCheck className="size-3 stroke-white" />}
            text="Strengthen the foundation"
            pill="Align"
          />
          <GradientHr />

          <Row
            icon={<IconCheck className="size-3 stroke-white" />}
            text="Support strategic growth"
            pill="Build"
          />
          <GradientHr />

          <Row
            icon={<IconLoader2 className="size-3 animate-spin text-[#C8A96A]" />}
            text="Create long-term value"
            pill="Grow"
            variant="warning"
          />
        </div>
      </div>
    </div>
  );
};

const GradientHr = () => {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
  );
};

const Row = ({
  icon,
  text,
  pill,
  variant = "success",
}: {
  icon: React.ReactNode;
  text: string;
  pill: string;
  variant?: "success" | "warning";
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-2.5">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "size-4 flex items-center justify-center rounded-full",
            variant === "success" && "bg-emerald-500",
            variant === "warning" && "bg-[#0B1F3A]"
          )}
        >
          {icon}
        </div>
        <p className="text-neutral-500 font-medium text-xs md:text-sm">
          {text}
        </p>
      </div>

      <div className="flex items-center gap-1 rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/10 px-2 py-1 text-[#0B1F3A] dark:text-white">
        <IconRipple className="size-3 text-[#C8A96A]" />
        <p className="text-[10px] font-bold">{pill}</p>
      </div>
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed" />
  );
};