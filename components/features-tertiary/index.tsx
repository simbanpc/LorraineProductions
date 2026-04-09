"use client";
import React, { useState } from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonFour } from "./skeletons/four";
import { DollarSign, HouseIcon } from "lucide-react";

export const FeaturesTertiary = () => {
  const realEstateDescriptions = [
  {
    label: "Westside Venture Partners",
    href: "https://westsideventurepartners.org/",
    text: "Supports housing development and community revitalization through affordable, high-quality real estate initiatives that help create stable homes, strengthen neighborhoods, and unlock long-term community growth.",
  },
  {
    label: "Lorraine Productions LLC",
    href: "#",
    text: "Maintains an existing real estate asset while actively evaluating future acquisitions that expand the portfolio and support long-term development goals.",
  },
];

  const engagementContent = {
    speaking: {
      title: "Engagement",
      descriptions: [
        {
          label: "Leadership Atlanta",
          href: "https://www.leadershipatlanta.org",
          text: "Engages leaders in conversations and initiatives that strengthen communities through service, collaboration, and local impact.",
        },
        {
          label: "OnBoard",
          href: "https://www.onboardinc.org/",
          text: "Contributes to conversations that advance women in leadership through visibility, connection, and executive growth.",
        },
        {
          label: "Lorraine Productions LLC",
          href: "#",
          text: "Participates in public-facing conversations and engagements that promote leadership, education, and community well-being.",
        },
      ],
    },
    community: {
      title: "Engagement",
      descriptions: [
        {
          label: "Douglassaires Association",
          href: "https://www.douglassaires1907.com/",
          text: "Champions educational opportunity, scholarships, and community projects that honor legacy and empower future generations.",
        },
        {
          label: "Cool Girls",
          href: "https://thecoolgirls.org/",
          text: "Advocates for girls through confidence-building, self-empowerment, and broader access to opportunity.",
        },
        {
          label: "Latinas Rise",
          href: "https://latinasrise.org/",
          text: "Supports Latina entrepreneurs through education, mentoring, networking, and business opportunities that help communities grow stronger.",
        },
      ],
    },
    business: {
      title: "Engagement",
      descriptions: [
        {
          label: "Women on the Cap Table",
          href: "https://www.womencaptable.com/",
          text: "Expands access to angel investing through investor education, curated opportunities, and a collaborative community of women investors.",
        },
        {
          label: "Golden Seeds",
          href: "https://www.goldenseeds.com/",
          text: "Supports women-led startups through investor education, curated deal flow, and a national network focused on growth and innovation.",
        },
        {
          label: "Lorraine Productions LLC",
          href: "#",
          text: "Advocates for business growth through strategic visibility, relationship-building, and support for founder and investor ecosystems.",
        },
      ],
    },
  } as const;

  const angelInvestingDescriptions = [
    {
      label: "Women on the Cap Table",
      href: "https://www.womencaptable.com/",
      text: "Supports a more accessible and collaborative angel investing ecosystem by connecting women investors to education, curated opportunities, and a strong community built around high-growth early-stage companies.",
    },
    {
      label: "Golden Seeds",
      href: "https://www.goldenseeds.com/",
      text: "Invests in women-led startups through a structured network that combines curated deal flow, investor education, and a mission-driven community focused on long-term growth and meaningful impact.",
    },
  ];

  const mentorshipDescriptions = [
    {
      label: "Douglassaires Association",
      href: "https://www.douglassaires1907.com/",
      text: "Invests in youth through education, community connection, and leadership-centered support.",
    },
    {
      label: "Leadership Atlanta",
      href: "https://www.leadershipatlanta.org",
      text: "Cultivates civic-minded leaders committed to strengthening Atlanta through learning, service, and collaboration.",
    },
    {
      label: "OnBoard",
      href: "https://www.onboardinc.org/",
      text: "Advances women in leadership through board-readiness support, professional development, and a strong executive community.",
    },
    {
      label: "Oklahoma State University",
      href: "https://go.okstate.edu/",
      text: "Fosters student success through mentorship, leadership opportunities, and campus support systems.",
    },
    {
      label: "Cool Girls",
      href: "https://thecoolgirls.org/",
      text: "Builds confidence and opportunity for girls through mentoring and life-enriching support programs.",
    },
    {
      label: "Latinas Rise",
      href: "https://latinasrise.org/",
      text: "Empowers Latina entrepreneurs with mentorship, resources, and community-driven business support.",
    },
  ];

  type EngagementKey = keyof typeof engagementContent;

  const [activeEngagement, setActiveEngagement] =
    useState<EngagementKey>("speaking");

  const activeCopy = engagementContent[activeEngagement];
  return (
    <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
       <Container className="px-0 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-neutral-200 dark:divide-neutral-800">
            <div className="md:border-r border-neutral-200 dark:border-neutral-800">
              <CardContent>
                <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                  Mentorship
                </h2>

                <div className="mt-2 space-y-2">
                  {mentorshipDescriptions.map((item) => (
                    <CardDescription key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-neutral-800 underline-offset-4 transition hover:underline dark:text-neutral-200"
                      >
                        {item.label}
                      </a>
                      :{" "}
                      {item.text}
                    </CardDescription>
                  ))}
                </div>
              </CardContent>
              <CardSkeleton className="mask-radial-from-20% mask-r-from-50% h-80 md:h-100 mt-10">
                <SkeletonTwo />
              </CardSkeleton>
            </div>
            <div className="dark:border-neutral-800">
              <CardContent>
                <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                  {activeCopy.title}
                </h2>

                <div className="mt-2 space-y-2 h-90 md:h-60">
                  {activeCopy.descriptions.map((item) => (
                    <CardDescription key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-neutral-800 underline-offset-4 transition hover:underline dark:text-neutral-200"
                      >
                        {item.label}
                      </a>{" "}
                      {item.text}
                    </CardDescription>
                  ))}
                </div>
              </CardContent>
              <CardSkeleton className="h-160 md:h-160">
                <SkeletonFour
                  activeKey={activeEngagement}
                  onChange={setActiveEngagement}
                />
              </CardSkeleton>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-20">
              <div>
                <div className="flex items-center gap-2">
                  <HouseIcon />
                  <h3 className="font-bold text-lg text-neutral-600 dark:text-neutral-400">
                    Real Estate
                  </h3>
                </div>
    
                <div className="text-neutral-500 text-base mt-2">
                  {realEstateDescriptions.map((item) => (
                    <CardDescription key={item.label}>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-neutral-800 underline-offset-4 transition hover:underline dark:text-neutral-200"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                          {item.label}
                        </span>
                      )}
                      :{" "}
                      {item.text}
                    </CardDescription>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <DollarSign />
                  <h3 className="font-bold text-lg text-neutral-600 dark:text-neutral-400">
                    Angel Investing
                  </h3>
                </div>
    
                <div className="text-neutral-500 text-base mt-2">
                  {angelInvestingDescriptions.map((item) => (
                    <CardDescription key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-neutral-800 underline-offset-4 transition hover:underline dark:text-neutral-200"
                      >
                        {item.label}
                      </a>
                      :{" "}
                      {item.text}
                    </CardDescription>
                  ))}
                </div>
              </div>
            </div>
        </Container>
    </section>
  );
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-md text-balance">
      {children}
    </p>
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
        "relative h-100 sm:h-80 flex flex-col md:h-100 overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};
