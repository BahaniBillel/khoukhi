import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import firstImage from "../images/1.jpg";
import secondImage from "../images/2.jpg";
import thirdImage from "../images/3.jpg";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image src={firstImage} alt="" loading="lazy" />
        </div>
        <div>
          <Image src={secondImage} alt="" loading="lazy" />
        </div>
        <div>
          <Image src={thirdImage} alt="" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
