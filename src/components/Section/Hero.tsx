"use client";
import React, { useRef } from "react";
import Container from "../ui/container";
import Button from "../ui/button";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  return (
    <div className=" relative bg-background text-white ">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className=" absolute -top-[--header-height] left-0 w-full h-[200vh]"
      >
        <video
          src={"/assets/large.mp4"}
          autoPlay
          muted
          loop
          className=" sticky top-0 h-screen object-cover -z-0 w-full "
        />
      </motion.div>
      <Container className=" pb-7 relative z-10 h-[--hero-height]  ">
        <motion.div
          className="flex flex-col h-full justify-end items-start"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView={"visible"}
          exit={"hidden"}
          animate="hidden"
          viewport={{ amount: 0.9 }}
        >
          <h1 className=" text-4xl md:text-5xl font-bold mb-10">
            All Apple Originals. <br /> Only on Apple TV+.
          </h1>
          <Button size="large" className=" mb-16">
            Stream Now
          </Button>
          <p className=" flex items-center gap-2">
            Watch on the{" "}
            <Image
              src={"/assets/AppleTVLogo.svg.png"}
              alt="apple_tv_logo"
              width={30}
              height={30}
              priority
            />{" "}
            app.
          </p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
