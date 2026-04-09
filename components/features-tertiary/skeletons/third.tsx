"use client";
import { motion } from "motion/react";
import {
  Handshake,
  Radar,
  Search,
  Sparkles,
} from "lucide-react";
import React from "react";

export const SkeletonThree = () => {
  return (
    <div className="absolute inset-x-10 inset-y-2 mx-auto flex h-full w-full flex-1 flex-col overflow-hidden">
        <div className="relative flex-1 min-h-0 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="relative flex h-[15rem] w-[15rem] items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-[#C8A96A]/35"
              />

              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-4 rounded-full border border-[#C8A96A]/20 bg-[radial-gradient(circle,rgba(200,169,106,0.14),transparent_70%)]"
              />

              <div className="relative z-20 flex h-[12rem] w-[12rem] flex-col items-center justify-center rounded-full border border-neutral-200 bg-white/95 px-5 text-center shadow-[0_18px_50px_rgba(11,31,58,0.10)] dark:border-white/10 dark:bg-[#0f2746]/90">
                <div className="mb-2 flex size-11 items-center justify-center rounded-full bg-[#0B1F3A] text-white dark:bg-[#C8A96A] dark:text-[#0B1F3A]">
                  <Sparkles className="size-5" />
                </div>

                <p className="text-sm font-semibold text-[#0B1F3A] dark:text-white">
                  Investor Ecosystem
                </p>

                <p className="mt-2 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Networks and communities that expand access to early-stage opportunities, informed investing, and long-term founder support.
                </p>
              </div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute left-1/2 top-0 flex -translate-x-1/2 items-center gap-1 rounded-full border border-neutral-200 bg-white/90 px-2 py-1 text-[10px] font-medium text-neutral-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                  <Radar className="size-3" />
                  Deal Flow
                </div>
                <div className="absolute bottom-5 left-3 flex items-center gap-1 rounded-full border border-neutral-200 bg-white/90 px-2 py-1 text-[10px] font-medium text-neutral-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                  <Search className="size-3" />
                  Diligence
                </div>
                <div className="absolute bottom-5 right-3 flex items-center gap-1 rounded-full border border-neutral-200 bg-white/90 px-2 py-1 text-[10px] font-medium text-neutral-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                  <Handshake className="size-3" />
                  Growth
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

    </div>
  );
};