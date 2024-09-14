"use client";
import HeroFive from "@/components/Landing/HeroFive";
import HeroFour from "@/components/Landing/HeroFour";
import HeroOne from "@/components/Landing/HeroOne";
import HeroThree from "@/components/Landing/HeroThree";
import HeroTwo from "@/components/Landing/HeroTwo";
import News from "@/components/Landing/News";
import Video from "@/components/Landing/Video";
import Volunteers from "@/components/Landing/Volunteers";

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
      <News />
      {/* Volunteers */}
      <Volunteers />
    </>
  );
}
