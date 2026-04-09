"use client";
import React, { useState } from "react";
import { Logo } from "./logo";
import { Container } from "./container";
import Link from "next/link";
import { Button } from "./ui/button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { ModeToggle } from "@/components/mode-toggle";

const navlinks = [
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

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:hidden px-4 py-2 justify-between relative">
      <Logo />

      <button onClick={() => setOpen(true)}>
        <IconLayoutSidebar className="size-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex h-dvh w-full flex-col justify-between px-4 py-1.5 bg-white/70 dark:bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/40"
            style={{
              WebkitBackdropFilter: "blur(15px)",
              backdropFilter: "blur(15px)",
            }}
          >
            <div>
              <div className="flex justify-between">
                <Logo />
                <button onClick={() => setOpen(false)}>
                  <IconX />
                </button>
              </div>

              <div className="my-10 flex flex-col gap-6">
                {navlinks.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-2xl font-medium text-neutral-600 dark:text-neutral-400"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-4">
              <Button onClick={() => setOpen(false)} asChild>
                <Link href="/contact">Work with us</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="py-4 items-center justify-between hidden lg:flex">
      <Logo />
      <div className="flex items-center gap-10">
        {navlinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle/>
        <Button asChild>
          <Link href="/contact">Work with us</Link>
        </Button>
      </div>
    </Container>
  );
};
