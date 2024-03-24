import Feature from "@/components/Section/Feature";
import Hero from "@/components/Section/Hero";
import Pricing from "@/components/Section/Pricing";
import VideoCaresoul from "@/components/Section/VideoCaresoul";
import Container from "@/components/ui/container";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" bg-background text-white relative z-10">
        <Hero />
        <Feature />
        <Pricing />
      </div>
      <VideoCaresoul />
      <div className=" h-[300vh]"></div>
    </>
  );
}
