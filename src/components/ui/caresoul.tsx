import { Movie } from "@/constants";
import Image from "next/image";
import React from "react";

const Caresoul = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className=" flex gap-3  animate-carousel-move relative left-[var(--caresoul-offset,0px)]">
        {movies.map((img, index) => (
          <div
            key={index}
            className=" w-[23vw] aspect-video  relative shrink-0 "
          >
            <Image
              src={img.poster}
              alt={img.name}
              fill
              className=" w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caresoul;
