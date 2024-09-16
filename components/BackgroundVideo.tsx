import React, { useEffect, useState } from "react";

const BackgroundVideo = ({ src, id }: { src: string, id: string }) => {
  const [scroll, setScroll] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const element = document.getElementById(id);
    if (element) {
      setOffsetTop(element.offsetTop);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  const getParallaxEffect = (sectionOffsetTop: number, scrollFactor = 0.4) => {
    const relativeScrollY = scroll - sectionOffsetTop;
    return `translateY(${relativeScrollY * scrollFactor}px)`;
  };
  return (
    <>
      <video
        className="hero-video"
        style={{
          transform: getParallaxEffect(offsetTop),
        }}
        autoPlay
        loop
        muted
      >
        <source
          className=""
          src={src}
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default BackgroundVideo;
