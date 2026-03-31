import CTA from "@/components/cta";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Outcomes } from "@/components/outcomes";
import { Speed } from "@/components/speed";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Speed />
      <Outcomes />
      <CTA />
    </div>
  );
}
