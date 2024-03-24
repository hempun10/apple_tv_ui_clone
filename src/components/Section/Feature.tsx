import React from "react";
import Container from "../ui/container";
import FadeIn from "../ui/fade-in";
import Offer from "../ui/offer";

const Feature = () => {
  return (
    <div>
      <Container className=" text-white text-3xl md:text-4xl font-bold space-y-12 max-w-[692px] py-36 z-10 relative">
        <FadeIn>
          <p>New Apple Originals every month — always ad‑free.</p>
        </FadeIn>
        <FadeIn>
          <p>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </p>
        </FadeIn>
        <FadeIn>
          <p>Watch in 4K HDR video with immersive Spatial Audio.1</p>
        </FadeIn>
        <FadeIn>
          <p>Share a single subscription with up to five people.</p>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Feature;
