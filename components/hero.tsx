import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import { LandingImages } from "./landing-images";
import { GradientDivider } from "./gradient-divider";

export const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <Heading as="h1">
          Building Legacy.
          <br />
          Creating Opportunity. 
          <br />
          Empowering the Future.
        </Heading>

        <Subheading className="py-8">
          Investing • Business Consulting • Mentorship & Leadership
        </Subheading>
        <div className="flex items-center gap-6">
          <Button className="shadow-brand"><Link href="/contact">Work with us</Link></Button>
          <Button asChild variant="outline">
            <Link href="#legacy">Learn more</Link>
          </Button>
        </div>
        <LandingImages />
      </Container>
      <GradientDivider />
    </section>
  );
};
