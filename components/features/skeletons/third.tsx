"use client";

import { cn } from "@/lib/utils";
import { IconUsersGroup } from "@tabler/icons-react";
import React from "react";

export const SkeletonThree = () => {
  const partners = [
    { label: "Mentorship", className: "top-4 left-7" },
    { label: "Engagement", className: "top-8 right-6" },
    { label: "Community", className: "bottom-10 left-10" },
    { label: "Investment", className: "bottom-6 right-10" },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden mask-radial-from-50% mask-b-from-50%">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.10),transparent_45%)]" />

      <div className="relative h-[260px] w-full max-w-[360px]">
        <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-[#C8A96A]/25 bg-white text-center shadow-[0_10px_30px_rgba(11,31,58,0.10)] dark:border-[#C8A96A]/20 dark:bg-[#102746]">
          <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-[#C8A96A]/15 text-[#C8A96A]">
            <IconUsersGroup className="size-5" />
          </div>
          <p className="px-2 text-xs font-semibold text-[#0B1F3A] dark:text-white">
            Connection
          </p>
          <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
            Relationship-Driven Growth
          </p>
        </div>

        <svg
          className="absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 360 260"
          fill="none"
        >
          <path
            d="M180 130 L85 35"
            stroke="#C8A96A"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M180 130 L275 55"
            stroke="#C8A96A"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M180 130 L100 205"
            stroke="#C8A96A"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M180 130 L270 210"
            stroke="#C8A96A"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        {partners.map((item, idx) => (
          <div
            key={item.label}
            className={cn(
              "absolute z-20 rounded-full border border-[#C8A96A]/20 bg-white px-3 py-2 text-xs font-medium text-[#0B1F3A] shadow-[0_8px_24px_rgba(11,31,58,0.08)] dark:border-[#C8A96A]/15 dark:bg-[#102746] dark:text-white",
              item.className
            )}
            style={{
              animation: `floatCard 4s ease-in-out ${idx * 0.4}s infinite`,
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </div>
  );
};