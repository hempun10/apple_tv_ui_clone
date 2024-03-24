import React from "react";
import Offer from "../ui/offer";
import Container from "../ui/container";
import { PRICING } from "@/constants";
import FadeIn from "../ui/fade-in";

const Pricing = () => {
  return (
    <div>
      <Container className=" md:w-[1040px]">
        <FadeIn>
          <div className=" flex flex-col md:grid md:grid-cols-3 gap-6  max-sm:px-5">
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
