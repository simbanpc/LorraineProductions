import React from "react";
import { Logo } from "./logo";
import { Container } from "./container";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

export const Footer = () => {
  const product = [
    {
      title: "Westside Venture Partners",
      href: "https://westsideventurepartners.org/",
      image:""
    },
    {
      title: "Women on the Cap Table",
      href: "https://www.womencaptable.com/",
      image:"/wct-white.png"
    },
    {
      title: "Douglassaires Association",
      href: "https://www.douglassaires1907.com/",
      image:"/douglassaires.png"
    },
    {
      title: "Cool Girls",
      href: "https://thecoolgirls.org/",
      image:"/cropped-Cool-Girls-Logo.png"
    },
    {
      title: "Latinas Rise",
      href: "https://latinasrise.org/",
      image:"/Latinas-Rise-Full.png"
    },
    {
      title: "Golden Seeds",
      href: "https://www.goldenseeds.com/",
      image:"/goldenSeeds.svg"
    },
  ];

  const company = [
    {
      title: "Legacy",
      href: "/#legacy",
    },
    {
      title: "Opportunity",
      href: "/#opportunity",
    },
    {
      title: "Future",
      href: "/#future",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <footer className="border-t perspective-distant overflow-hidden border-neutral-200 dark:border-neutral-800 py-10 md:py-20 lg:py-32 relative w-full">
      <Container className="relative z-20 flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="lg:col-span-2 flex flex-col gap-4 items-start">
          <Logo />
          <Subheading>Real Estate • Business Consulting • Mentorship & Leadership</Subheading>
          <Button className="shadow-brand"><Link href="/contact">Work with us</Link></Button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Company</h4>
          <ul className="list-none flex flex-col gap-2">
            {company.map((item, index) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-neutral-600 text-sm hover:text-black dark:text-neutral-400 dark:hover:text-white transition duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Associated Organizations</h4>
          <ul className="list-none flex flex-col gap-2">
            {product.map((item) => (
                <li key={item.title} className="flex items-center gap-2">
                  <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <div
                      className="text-sm text-neutral-600 transition duration-200 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                    >
                      {item.title}
                    </div>
                  </Link>
                  <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={32}
                      width={32}
                      draggable={false}
                      className="shrink-0 object-contain"
                    />
                  )}
                  </Link>
                </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col sm:flex-row justify-between mt-10 relative z-20 gap-4 md:gap-0">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Lorraine Productions LLC. All rights reserved.
        </p>

        <div className="flex md:items-end items-start flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 *:text-sm *:text-neutral-500">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <IconBrandX className="size-4" />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <IconBrandInstagram className="size-4" />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedin className="size-4" />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <IconBrandFacebook className="size-4" />
            </Link>
          </div>
        </div>
      </Container>

      <div
        className={cn(
          "flex items-center justify-center gap-20 h-[200%]",
          "absolute -inset-x-[150%] -inset-y-40",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-900)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-900)_1px,transparent_1px)]",
          "mask-radial-from-50%"
        )}
        style={{
          transform: " rotateX(60deg) ",
        }}
      />
    </footer>
  );
};
