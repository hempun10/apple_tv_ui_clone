import React from "react";
import Offer from "../ui/offer";
import Container from "../ui/container";
import { PRICING } from "@/constants";
import FadeIn from "../ui/fade-in";

const Pricing = () => {
  return (
    <div>
      <Container className=" w-[1040px]">
        <FadeIn>
          <div className=" grid grid-cols-3 gap-6">
            {PRICING.map((offer, index) => (
              <Offer
                subHead={offer.subHeadText}
                heading={offer.headingText}
                btnText={offer.btnText}
                desc={offer.desc}
                key={index}
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Pricing;
