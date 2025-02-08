import React from "react";
import Section from "./Secttion";
import Heading from "./Heading";
import Link from "next/link";
import { LeftLine, RightLine } from "./design/Pricing";
import PricingList from "./PricingList";

const PricingCard = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <Heading tag="Get started with Opal" title="Pay once, use forever" />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/pricing"
            className="text-xs font-code font-bold tracking-wider uppercasee border-b"
          >
            See the full details
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default PricingCard;
