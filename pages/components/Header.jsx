import React from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import {
  Bars3Icon,
  MenuIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="">
      <div className="h-20 bg-white w-screen shadow-sm px-5 flex flex-row items-center flex-grow py-2 sm:flex-grow ">
        <div className="w-24 h-24">
          <Image src={Logo} alt="Vercel Logo" layout="responsive" />
        </div>

        <div className="items-center sm:flex bg-pink-400 hover:bg-pink-500 rounded-md flex-grow pr-5 mx-4 hidden">
          <input
            type="text"
            name=""
            id=""
            className="bg-slate-200 p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none mr-5 "
          />
          <MagnifyingGlassIcon className="h-6 w-6 text-white " />
        </div>

        {/* <right buttons */}

        <div className="text-slate-700 flex flex-row items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className=" link">
            <p>hello billel bahani</p>
            <p className="font-extrabold md: text-sm"> Account & Lists</p>
          </div>

          <div className=" link">
            <p>Returns</p>
            <p className="font-extrabold md: text-sm"> & Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full ">
              0
            </span>
            <ShoppingCartIcon className="h-6 w-6 text-slate-700 " />
            <p className="font-extrabold md: text-sm hidden md:inline mt-2">
              basket
            </p>
          </div>
        </div>
        {/* Bottom navigation */}
      </div>
      <div className="bg-pink-400 flex items-center text-white space-x-3 px-5 text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="h-10  mr-1 " />
          All
        </p>

        <p className="link">Prime Video</p>
        <p className="link">Khoukhi Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Elocronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
