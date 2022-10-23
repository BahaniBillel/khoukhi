import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import firstImage from "../images/1.jpg";
import secondImage from "../images/2.jpg";
import thirdImage from "../images/3.jpg";
import promo from "../images/promo2.jpg";
import Image from "next/image";

function Banner() {
  return (
    <div className="  md:grid md:grid-cols-4 md:h-[476px] w-full   gap-2  md:grid-flow-row-dense py-2 text-xs">
      <div className="col-span-1 bg-white md:rounded-md p-2">left</div>

      <div className="col-span-2  grid grid-flow-row-dense grid-rows-6 gap-2 h-full ">
        <div className="row-span-1 bg-white">menu</div>
        <div className="row-span-3 bg-slate-300 md:rounded-md overflow-hidden">

        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          className='md:h-9'
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
        <div className="row-span-2 bg-white md:rounded-md p-2 overflow-hidden">
          <Image src={promo}  layout="responsive" objectFit="cover" height={900} />
        </div>
      </div>

      <div className="col-span-1 bg-white md:rounded-md p-2">right</div>
    </div>
  );
}

export default Banner;
