"use client";
import React, { useMemo, useRef, useState } from "react";
import Container from "../ui/container";
import Image from "next/image";
import { movies, randomMoviesSet1, randomMoviesSet2 } from "@/constants";
import Caresoul from "../ui/caresoul";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useWindowSize } from "react-use";
import Button from "../ui/button";

const VideoCaresoul = () => {
  const { width, height } = useWindowSize();
  const [caresoulVarient, setcaresoulVarient] = useState<"inactive" | "active">(
    "inactive"
  );
  const caresoulWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: caresoulWrapperRef,
    offset: ["start start", "end start"],
  });

  const maxScale = useMemo(() => {
    const windowRatio = height / width;
    const xScale = 1.6667;
    const yScale = xScale * (16 / 9) * windowRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const posterOpactity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);

  const posterTranslateXleft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maxScale * 1.1, maxScale, 1]
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setcaresoulVarient("active");
    } else {
      setcaresoulVarient("inactive");
    }
  });

  return (
    <motion.div animate={caresoulVarient} className=" bg-background pb-10">
      <div
        ref={caresoulWrapperRef}
        className="overflow-clip h-[300vh] mt-[-100vh]"
      >
        <div className=" h-screen  sticky top-0 flex items-center">
          <div className=" relative flex gap-5 mb-5 left-1/2 -translate-x-1/2 ">
            <motion.div
              style={{
                opacity: posterOpactity,
                x: posterTranslateXleft,
              }}
              className=" relative w-[300px] md:w-[60vw] aspect-[9/16] md:aspect-video shrink-0 rounded-2xl overflow-clip"
            >
              <Image
                src={movies[0].poster}
                alt={movies[0].name}
                fill
                className=" w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{
                scale,
              }}
              className=" relative w-[300px] md:w-[60vw] aspect-[9/16] md:aspect-video shrink-0 rounded-2xl overflow-clip z-10"
            >
              <Image
                src={movies[1].poster}
                alt={movies[0].name}
                fill
                className=" w-full h-full object-cover"
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className=" absolute flex  flex-col md:flex-row gap-4  md:gap-0 md:justify-between left-0 bottom-0 w-full p-5 text-white text-lg items-center "
              >
                <p>{movies[1].name}</p>
                <Button>Stream Now</Button>
              </motion.div>
            </motion.div>
            <motion.div
              style={{
                opacity: posterOpactity,
                x: posterTranslateXRight,
              }}
              className=" relative w-[300px] md:w-[60vw] aspect-[9/16] md:aspect-video shrink-0 rounded-2xl overflow-clip z-0"
            >
              <Image
                src={movies[2].poster}
                alt={movies[0].name}
                fill
                className=" w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{
          duration: 0.5,
        }}
        className=" space-y-3 -mt-[calc((100vh-(300px*(16/9)))/2)] md:-mt-[calc((100vh-(300px*(16/9)))/2)] pt-5"
      >
        <Caresoul movies={randomMoviesSet1} />
        <div className=" [--duration:50s] [--caresoul-offset:32px]">
          <Caresoul movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoCaresoul;
