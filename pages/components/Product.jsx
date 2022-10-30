import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import ReactStars from "react-rating-stars-component";

function Product({ id, title, price, description, category, image, url }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div
      className="hover:bg-pink-400 hover:transition hover:duration-150
    hover:ease-out pl-[1px] pr-[1px] pt-[1px] pb-10 m-2 rounded-b-md cursor-pointer"
    >
      <div
        className=" relative flex flex-col   bg-white z-30 p-5  space-y-2 group rounded-b-md "
        onClick={url}
      >
        <div className="flex flex-row  text-xs   ">
          <div className="flex-grow"></div>
          <p className=" flex-none text-gray-500 italic">{category}</p>
        </div>

        <div className="w-full   ">
          <Image src={image} height={300} width={300} objectFit="contain" />
        </div>

        {/* <div className="relative  flex-col space-y-5 group  ">
        <h4 className="text-md font-bold flex truncate">{title}</h4>
        <p className="text-sm text-gray-500 hover:text-black md:truncate">
          {description}
        </p>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          className=""
        />
        <CurrencyFormat
          value={price}
          suffix={" DZD"}
          className="flex-none font-bold w-20"
        />
      </div> */}
        <div className="flex-grow"></div>
        {/* <button className="mt-auto button   ">
        {" "}
        Add to Basket
      </button> */}
      </div>
      <button className="mt-auto button  hidden group-hover:block   ">
        {" "}
        Add to Basket
      </button>
    </div>
  );
}

export default Product;

// stopped at 1:25:47
