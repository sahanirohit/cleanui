import React from "react";
import { memo } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Typed from "react-typed";
import heroImage from "../assets/images/heroImage.jpg";

function Hero() {
  return (
    <section className="lg:px-28 h-full px-6 py-32">
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="font-[Montserrat] flex-1 items-center text-center lg:text-left lg:items-start flex flex-col space-y-6">
          <h2 className="text-xl font-semibold leading-none">
            A Full Stack Experience
          </h2>
          <h1 className="md:text-[5rem] sm:text-[4rem] text-[2rem] duration-500 font-extrabold leading-none">
            THAT BRINGS IT ALL TOGETHER
          </h1>
          <h2 className="sm:text-3xl duration-500 text-2xl font-semibold leading-none">
            <Typed
              strings={[
                "We help in Web Development.",
                "We help in Web Design.",
                "We help in Mobile App Development.",
                "We help in Digital Marketing.",
                "We help in Web Hosting Service.",
                "We help in E-commerce Website Development.",
              ]}
              typeSpeed={75}
              backSpeed={75}
              loop={true}
            />
          </h2>
          <div className="sm:space-x-8 flex flex-col sm:flex-row sm:space-y-0 space-y-3 pt-8">
            <button className="px-6 py-3 bg-active-accent border-2 font-[Montserrat] font-bold rounded-xl border-active-accent text-white text-xl">
              My Portfolio
            </button>
            <button className="px-6 py-3 duration-300 hover:bg-active-accent hover:border-active-accent bg-dark-primary border-2 font-[Montserrat] font-bold rounded-xl border-white text-white text-xl">
              <a
                href="http://wa.me/918957912038"
                target="_blank"
                rel="noopener noreferrer">
                Contact me
              </a>
            </button>
          </div>
          <div className="flex space-x-4 text-2xl py-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
              <FaFacebook className="text-[#3b5998] cursor-pointer duration-300 text-3xl" />
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
              <FaInstagram className="text-[#8a3ab9] cursor-pointer duration-300 " />
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
              <FaTwitter className="text-[#00AACC] cursor-pointer duration-300 " />
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
              <FaLinkedin className="text-[#3b5998] cursor-pointer duration-300" />
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <img
            src={heroImage}
            alt=""
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
