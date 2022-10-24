import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import firstImage from "../images/1.jpg";
import secondImage from "../images/2.jpg";
import thirdImage from "../images/3.jpg";
import promo from "../images/promo2.jpg";
import Image from "next/image";
import {} from "@heroicons/react/24/outline";

function Banner() {
  return (
    <div className="  md:grid md:grid-cols-4 md:h-[476px] w-full   gap-2  md:grid-flow-row-dense p-2 text-xs md:mb-28  overflow-hidden">
      <div className="col-span-1 bg-white md:rounded-md p-2 shadow-md">
        left
      </div>

      <div className="col-span-2  grid grid-flow-row-dense grid-rows-6 gap-2 h-full ">
        <div className="row-span-1 bg-white p-2 rounded-md  shadow-md ">
          menu
        </div>
        <div className="row-span-3 bg-slate-300 md:rounded-md overflow-hidden  shadow-md ">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            className="md:h-9"
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
        <div className="row-span-2 bg-white md:rounded-md p-2 overflow-hidden shadow-md">
          <Image
            src={promo}
            layout="responsive"
            objectFit="cover"
            height={700}
          />
        </div>
      </div>

      <div className="col-span-1 bg-white md:rounded-md p-2 shadow-md">
        right
      </div>
    </div>
  );
}

export default Banner;
