import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from "./features/card";
import { SkeletonOne } from "./features/skeletons/first";
import { IconPlus } from "@tabler/icons-react";
import { SkeletonTwo } from "./features/skeletons/second";
import { SkeletonThree } from "./features/skeletons/third";

export const Speed = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-10 relative overflow-hidden">
      <Container>
        <div
        id="opportunity"
        >
          <Heading>
            Creating Opportunity
            <br />
            Through Strategy
          </Heading>

          <Subheading className="py-8">
            We turn vision into action through thoughtful guidance, strategic investment, and relationship-driven solutions. By identifying potential, strengthening foundations, and opening new pathways, Lorraine Productions LLC helps individuals, businesses, and communities grow with purpose.
          </Subheading>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 md:my-20">
            <Card className="rounded-tl-3xl rounded-bl-3xl">
              <CardSkeleton>
                <SkeletonOne />
              </CardSkeleton>
              <CardContent>
                <CardTitle>Vision</CardTitle>
                <CardCTA>
                  <IconPlus />
                </CardCTA>
              </CardContent>
            </Card>
            <Card>
              <CardSkeleton>
                <SkeletonTwo />
              </CardSkeleton>
              <CardContent>
                <CardTitle>Opportunity</CardTitle>
                <CardCTA>
                  <IconPlus />
                </CardCTA>
              </CardContent>
            </Card>
            <Card className="rounded-tr-3xl rounded-br-3xl">
              <CardSkeleton>
                <SkeletonThree />
              </CardSkeleton>
              <CardContent>
                <CardTitle>Connection</CardTitle>
                <CardCTA>
                  <IconPlus />
                </CardCTA>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
