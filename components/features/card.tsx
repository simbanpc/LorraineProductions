import { cn } from "@/lib/utils";
import React from "react";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full mx-auto rounded-[1.25rem] border border-[#C8A96A]/20 bg-neutral-100 text-[#0B1F3A] shadow-[0_10px_30px_rgba(11,31,58,0.08)] dark:border-[#C8A96A]/15 dark:bg-neutral-800 dark:text-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "px-4 pb-6 md:px-8 md:pb-12 flex items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "size-5 md:size-10 shrink-0 rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 text-[#0B1F3A] dark:border-[#C8A96A]/20 dark:bg-[#C8A96A]/15 dark:text-[#F8FAFC] flex items-center justify-center active:scale-[0.98] transition duration-200 hover:bg-[#C8A96A]/20",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "text-lg md:text-2xl font-bold font-display text-[#0B1F3A] dark:text-white",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-80 sm:h-60 md:h-80 overflow-hidden perspective-distant rounded-b-[1.25rem]",
        className
      )}
    >
      {children}
    </div>
  );
};