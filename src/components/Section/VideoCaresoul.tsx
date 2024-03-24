"use client";
import React, { useRef } from "react";
import Container from "../ui/container";
import Image from "next/image";
import { movies, randomMoviesSet1, randomMoviesSet2 } from "@/constants";
import Caresoul from "../ui/caresoul";
import { useScroll, useTransform, motion } from "framer-motion";

const VideoCaresoul = () => {
  const caresoulWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: caresoulWrapperRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [3, 2.5, 1]);
  return (
    <div className=" bg-background pb-8">
      <div
        ref={caresoulWrapperRef}
        className="overflow-clip h-[300vh] mt-[-100vh]"
      >
        <div className=" h-screen  sticky top-0 flex items-center">
          <div className=" relative flex gap-5 mb-5 left-1/2 -translate-x-1/2 ">
            <div className=" relative w-[60vw] aspect-video shrink-0 rounded-2xl overflow-clip">
              <Image
                src={movies[0].poster}
                alt={movies[0].name}
                fill
                className=" w-full h-full object-cover"
              />
            </div>
            <motion.div
              style={{
                scale,
              }}
              className=" relative w-[60vw] aspect-video shrink-0 rounded-2xl overflow-clip z-10"
            >
              <Image
                src={movies[1].poster}
                alt={movies[0].name}
                fill
                className=" w-full h-full object-cover"
              />
            </motion.div>
            <div className=" relative w-[60vw] aspect-video shrink-0 rounded-2xl overflow-clip z-0">
              <Image
                src={movies[2].poster}
                alt={movies[0].name}
                fill
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" space-y-3">
        <Caresoul movies={randomMoviesSet1} />
        <div className=" [--duration:50s] [--caresoul-offset:32px]">
          <Caresoul movies={randomMoviesSet2} />
        </div>
      </div>
    </div>
  );
};

export default VideoCaresoul;
