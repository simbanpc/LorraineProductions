"use client";
import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  ExternalLink,
  Handshake,
  Megaphone,
  Mic,
  PlayCircle,
  Users,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";

type EngagementKey = "speaking" | "community" | "business";

type SkeletonFourProps = {
  activeKey: EngagementKey;
  onChange: (key: EngagementKey) => void;
};

export const SkeletonFour = ({
  activeKey,
  onChange,
}: SkeletonFourProps) => {
  const items = useMemo(
    () => [
      {
        key: "speaking" as const,
        title: "Civic Advocacy",
        icon: <Mic className="size-4" />,
        eyebrow: "Public Presence",
        description:
          "Creating space for leadership, advocacy, and conversations that move communities forward.",
        tags: ["Panels", "Podcasts", "Keynotes", "Leadership"],
        statLabel: "Formats",
        statValue: "Panel • Podcast • Keynote",
        media: [
          {
            title: "Featured YouTube Conversation",
            href: "https://youtu.be/PgHPW35bwwo?si=vnpZrqPG4JFofeh8",
            embedUrl: "https://www.youtube.com/embed/PgHPW35bwwo",
            type: "Watch",
          },
          {
            title: "Podcast Episode",
            href: "https://www.youtube.com/watch?v=VIDEO_ID_2",
            embedUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
            type: "Listen",
          },
          {
            title: "Leadership Talk",
            href: "https://www.youtube.com/watch?v=VIDEO_ID_3",
            embedUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
            type: "Watch",
          },
        ],
      },
      {
        key: "community" as const,
        title: "Community Advocacy",
        icon: <Megaphone className="size-4" />,
        eyebrow: "Community Voice",
        description:
          "Supporting initiatives that expand access, strengthen communities, and create lasting opportunity.",
        tags: ["Access", "Youth", "Education", "Impact"],
        statLabel: "Focus",
        statValue: "Access • Equity • Community",
      },
      {
        key: "business" as const,
        title: "Business Advocacy",
        icon: <BriefcaseBusiness className="size-4" />,
        eyebrow: "Founder & Investor Growth",
        description:
          "Championing visibility, capital access, and support systems that help businesses grow with purpose.",
        tags: ["Capital", "Founders", "Strategy", "Growth"],
        statLabel: "Themes",
        statValue: "Capital • Strategy • Visibility",
      },
    ],
    []
  );

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const restartTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  const selected =
    items.find((item) => item.key === activeKey) ?? items[0];

  useEffect(() => {
    currentIndexRef.current = items.findIndex((item) => item.key === activeKey);
  }, [activeKey, items]);

  useEffect(() => {
    startAutoplay();

    return () => {
      stopAutoplay();
      stopRestartTimeout();
    };
  }, []);

  const startAutoplay = () => {
    stopAutoplay();

    intervalRef.current = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % items.length;
      onChange(items[currentIndexRef.current].key);
    }, 7000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const stopRestartTimeout = () => {
    if (restartTimeoutRef.current) {
      clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = null;
    }
  };

  const handleSelect = (key: EngagementKey, idx: number) => {
    currentIndexRef.current = idx;
    onChange(key);

    stopAutoplay();
    stopRestartTimeout();

    restartTimeoutRef.current = setTimeout(() => {
      startAutoplay();
    }, 21000);
  };

  const featuredMedia =
    selected.key === "speaking" ? selected.media?.[0] : null;
  const mediaList =
    selected.key === "speaking" ? selected.media?.slice(1) ?? [] : [];

  return (
    <div className="w-full">
      <div className="mx-auto mb-4 flex max-w-xl flex-wrap items-center justify-center gap-2">
        {items.map((item, idx) => {
          const isActive = selected.key === item.key;

          return (
            <button
              key={item.key}
              onClick={() => handleSelect(item.key, idx)}
              className={cn(
                "relative flex cursor-pointer items-center justify-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium transition duration-200 active:scale-[0.98]",
                "border-neutral-200 bg-white text-[#0B1F3A] dark:border-white/10 dark:bg-white/5 dark:text-white",
                "hover:border-[#C8A96A]/50 hover:bg-[#C8A96A]/10",
                isActive &&
                  "border-[#C8A96A] bg-[#C8A96A]/15 text-[#0B1F3A] dark:text-[#F8FAFC]"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="selected-engagement-item"
                  className="absolute inset-0 rounded-full ring-1 ring-[#C8A96A]/40"
                />
              )}
              <span className="relative z-10 text-[#C8A96A]">{item.icon}</span>
              <span className="relative z-10">{item.title}</span>
            </button>
          );
        })}
      </div>

      <div className="absolute inset-x-0 mx-auto h-full w-full max-w-[21rem] rounded-t-3xl border border-neutral-200 bg-neutral-100 p-2 dark:border-neutral-700 dark:bg-neutral-800 lg:max-w-md">
        <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.4rem] border border-neutral-200/80 bg-white/95 p-4 dark:border-white/10 dark:bg-[#102746]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(11,31,58,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />

          <motion.div
            key={selected.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative flex h-full min-h-0 flex-col"
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

            <div className="mb-4 rounded-2xl border border-[#C8A96A]/20 bg-[#C8A96A]/10 p-3">
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

            <div className="min-h-0 flex-1">
              {selected.key === "speaking" && featuredMedia ? (
                <div className="grid md:h-40 min-h-0 grid-cols-1 gap-3 md:grid-cols-[1.35fr_.9fr]">
                  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between border-b border-neutral-200 px-3 py-2 dark:border-white/10">
                      <div className="flex items-center gap-2">
                        <Video className="size-4 text-[#C8A96A]" />
                        <p className="text-xs font-semibold text-[#0B1F3A] dark:text-white">
                          Featured Media
                        </p>
                      </div>
                      <a
                        href={featuredMedia.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-[#C8A96A]"
                      >
                        Open <ExternalLink className="size-3" />
                      </a>
                    </div>

                    <div className="aspect-video w-full">
                      <iframe
                        src={featuredMedia.embedUrl}
                        title={featuredMedia.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  <div className="flex min-h-0 flex-col gap-2">
                    {mediaList.map((media) => (
                      <a
                        key={media.title}
                        href={media.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-3 transition hover:border-[#C8A96A]/40 hover:bg-[#C8A96A]/5 dark:border-white/10 dark:bg-white/5"
                      >
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <PlayCircle className="size-4 text-[#C8A96A]" />
                            <p className="text-xs font-semibold text-[#0B1F3A] dark:text-white">
                              {media.type}
                            </p>
                          </div>
                          <ExternalLink className="size-3 text-neutral-400 transition group-hover:text-[#C8A96A]" />
                        </div>
                        <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                          {media.title}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              ) : selected.key === "community" ? (
                <div className="grid h-10 grid-cols-3 gap-2">
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-white/10 dark:bg-white/5">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                      Education
                    </p>
                    <p className="text-sm font-semibold text-[#0B1F3A] dark:text-white">
                      Youth opportunity
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-white/10 dark:bg-white/5">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                      Advocacy
                    </p>
                    <p className="text-sm font-semibold text-[#0B1F3A] dark:text-white">
                      Community voice
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-white/10 dark:bg-white/5">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                      Impact
                    </p>
                    <p className="text-sm font-semibold text-[#0B1F3A] dark:text-white">
                      Lasting support
                    </p>
                  </div>

                  <div className="col-span-3 rounded-2xl border border-[#C8A96A]/20 bg-[#C8A96A]/10 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Users className="size-4 text-[#C8A96A]" />
                      <p className="text-xs font-semibold text-[#0B1F3A] dark:text-white">
                        Community-first engagement
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      Advocacy centered on access, confidence, education, and long-term opportunity across the communities being served.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid h-10 grid-cols-2 gap-2">
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-white/10 dark:bg-white/5">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                      Capital Access
                    </p>
                    <p className="text-sm font-semibold text-[#0B1F3A] dark:text-white">
                      Founder visibility and funding pathways
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-white/10 dark:bg-white/5">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                      Investor Community
                    </p>
                    <p className="text-sm font-semibold text-[#0B1F3A] dark:text-white">
                      Education, diligence, and support
                    </p>
                  </div>

                  <div className="col-span-2 rounded-2xl border border-[#C8A96A]/20 bg-[#C8A96A]/10 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Handshake className="size-4 text-[#C8A96A]" />
                      <p className="text-xs font-semibold text-[#0B1F3A] dark:text-white">
                        Advocacy through business ecosystems
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      Supporting founders and investors through stronger networks, better access, and more informed growth opportunities.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};