import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-1")}>
      <LogoIcon />
    </Link>
  );
};

export const LogoIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <Image
      src="/LorraineProductions3.png"
      alt="LorraineProductions"
      width={"64"}
      height={"64"}
    />
  );
};
