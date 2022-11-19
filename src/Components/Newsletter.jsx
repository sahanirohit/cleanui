import React from "react";
import { memo } from "react";

import newsletterImage from "../assets/images/newsletter.jpg";

function Newsletter() {
  return (
    <section className=" bg-dark-secondary lg:px-28 py-8 px-6 relative">
      {/* <div className="absolute hidden sm:flex space-x-4 bottom-36 left-4 md:left-16 bottom">
        <div className="flex flex-col space-y-4">
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
      </div>
      <div className="absolute hidden sm:flex space-x-4 top-16 right-4 md:right-16 top">
        <div className="flex flex-col space-y-4">
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
      </div> */}
      <div className="grid lg:grid-cols-2 gap-8 ">
        {/* <div className="flex self-start bg-active-accent w-full"> */}
        <img
          src={newsletterImage}
          className="w-full h-full sm:h-80 object-contain"
        />
        {/* </div> */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 justify-center">
          <div className="">
            <h2 className="uppercase text-xl font-semibold leading-none">
              Get Our Weekly
            </h2>
            <h1 className="uppercase text-6xl font-bold leading-none">
              Newsletter
            </h1>
          </div>
          <p className="max-w-md">
            Get weekly updates on the newest design stories, case studies and
            tips right in your mailbox.
          </p>
          <div className="w-full lg:px-0 px-6 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-dark-secondary focus:border-active-accent focus:outline-none border-2 border-white/30 py-4 px-4 flex-1"
            />
            <button className="px-8 py-4 bg-active-accent text-white font-bold text-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Newsletter);
