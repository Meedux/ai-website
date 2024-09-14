"use client";
import HeroFive from "@/components/Landing/HeroFive";
import HeroFour from "@/components/Landing/HeroFour";
import HeroOne from "@/components/Landing/HeroOne";
import HeroThree from "@/components/Landing/HeroThree";
import HeroTwo from "@/components/Landing/HeroTwo";
import Video from "@/components/Landing/Video";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroOne />
      {/* Hero */}
      <HeroTwo /> 
      {/* Hero */}
      <HeroThree />
      {/* Videos */}
      <Video />
      {/* Hero */}
      <HeroFour />
      {/* Hero */}
      <HeroFive />
      {/* News */}
      {/* Volunteers */}
    </>
  );
}
