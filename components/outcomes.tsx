import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { LandingImages } from "./landing-images";
import { GradientDivider } from "./gradient-divider";

export const Outcomes = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <div
        id="future"
        >
          <Heading>
            Empowering the Future
            <br />
            Through Leadership
          </Heading>

          <Subheading className="py-8">
            Our work is rooted in the belief that true success is measured by what we build for others. Through mentorship, leadership, and community-centered investment, Lorraine Productions LLC is committed to equipping the next generation with the confidence, support, and opportunities needed to thrive.
          </Subheading>

          <LandingImages
            firstImageSrc={"/Hero image.avif"}
            secondImageSrc={"/Hero image.avif"}
          />
        </div>
      </Container>
      <GradientDivider />
    </section>
  );
};
