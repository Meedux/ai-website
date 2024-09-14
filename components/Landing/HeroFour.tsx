import React from "react";
import BackgroundVideo from "../BackgroundVideo";

const HeroFour = () => {
  return (
    <div className="hero-container" id="hero-4">
      <BackgroundVideo
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        id="hero-4"
      />
      <div className="hero-content">
        <h1 className="hero-heading">We Create The Impossible</h1>
        <p className="hero-paragraph">
          Velit adipisicing labore laborum consequat ipsum dolore commodo
          consectetur enim nulla voluptate ullamco magna eu.
        </p>
      </div>
    </div>
  );
};

export default HeroFour;
