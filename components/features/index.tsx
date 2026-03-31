import React from "react";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { FeaturesTertiary } from "../features-tertiary";
export const Features = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-32">
      <div
        id="legacy"
        className="flex xl:flex-row flex-col xl:items-baseline-last justify-between gap-10"
      >
        <Heading className="text-center lg:text-left">
          Building Legacy <br /> Through Impact
        </Heading>
        <Subheading className="text-center lg:text-left mx-auto lg:mx-0">
          Lorraine Productions LLC is a purpose-driven company dedicated to growth, investment, and community empowerment. We are committed to more than capital or business development. Through social investment, we create lasting legacy, expand opportunity, and empower communities to achieve sustainable growth for generations to come.
        </Subheading>
      </div>
      <FeaturesTertiary/>
    </Container>
  );
};
