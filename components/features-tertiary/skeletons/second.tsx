"use client";
import { LogoIcon } from "@/components/logo";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

export const SkeletonTwo = () => {
  return (
    <div className="flex-1 rounded-t-3xl gap-4 space-y-4 w-full h-full flex-col items-center justify-center">
      <div className="grid grid-cols-4 gap-2 justify-center max-w-md mx-auto">
        <Item />
        <a
          href="https://go.okstate.edu/"
          target="_blank"
          rel="noreferrer"
        >
          <Item src="/OSU.svg" />
        </a>
        <a
          href="https://thecoolgirls.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Item src="/cropped-Cool-Girls-Logo.png" />
        </a>
        <Item />
      </div>
      <div className="grid grid-cols-5 gap-2">
        <Item />
        <a
          href="https://www.onboardinc.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Item src="/onboard.webp" />
        </a>
        <Item containerClassName="from-black/50 via-transparent to-black/50">
          <div className="h-full w-full bg-neutral-100 dark:bg-neutral-800 rounded-[12px] flex items-center justify-center">
            <LogoIcon className="size-14" />
          </div>
        </Item>
        <a
          href="https://www.douglassaires1907.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Item src="/douglassaires.png" />
        </a>
        <Item />
      </div>
      <div className="grid grid-cols-4 justify-center max-w-md mx-auto gap-2">
        <Item />
        <a
          href="https://www.leadershipatlanta.org"
          target="_blank"
          rel="noreferrer"
        >
          <Item src="/LeadershipAtlanta.avif" />
        </a>
        <a
          href="https://latinasrise.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Item src="/Latinas-Rise-Full.png" />
        </a>
        <Item />
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
              <div className="flex h-full w-full items-center justify-center rounded-[12px] bg-neutral-400 p-3 dark:bg-neutral-400">
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