import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

function Testimonials() {
  return (
    <section className="lg:px-28 px-6 py-16">
      {/* Title */}
      <div className="text-center pb-16 flex items-center flex-col space-y-16">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-black text-secondary-accent tracking-widest">
            Testimonials
          </h1>
          <div className="relative before:absolute before:w-16 before:h-[2px] before:rounded-full before:bg-active-accent flex items-center justify-center before:bottom-0"></div>
        </div>
        <div className="bg-dark-secondary grid md:grid-cols-3 gap-y-8 md:gap-y-0 px-2 py-8 rounded-xl w-full">
          <div className="bg-dark-primary rounded-xl h-96 md:h-auto text-center items-center md:items-start md:text-left p-4 flex flex-col justify-between">
            <div className="">
              <h2 className="lg:text-4xl duration-500 text-3xl font-bold">
                Write a review
              </h2>
              <p className="">
                Please give few moment to write a review that help me to grow.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fa-solid fa-phone"></i>
                <p className="">+91 89579 12038</p>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fa-solid fa-envelope"></i>
                <p className="">rohitjobeis@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fa-solid fa-location"></i>
                <p className="">Surat, Gujarat - India</p>
              </div>
            </div>
            <div className="flex space-x-4 text-2xl py-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
                <FaFacebook className="text-[#3b5998] cursor-pointer duration-300 text-3xl" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
                <FaInstagram className="text-[#8a3ab9] cursor-pointer duration-300 " />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
                <FaTwitter className="text-[#00AACC] cursor-pointer duration-300 " />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
                <FaLinkedin className="text-[#3b5998] cursor-pointer duration-300" />
              </div>
            </div>
          </div>
          <div className=" md:col-span-2">
            <div className="grid grid-cols-2 gap-8 px-4">
              <input
                type="text"
                className="w-full py-3 bg-transparent focus:border-active-accent border-2 border-white/20 rounded-xl focus:outline-none px-4"
                placeholder="First Name*"
              />
              <input
                type="text"
                className="w-full py-3 bg-transparent focus:border-active-accent border-2 border-white/20 rounded-xl focus:outline-none px-4"
                placeholder="Last Name*"
              />
              <input
                type="file"
                className="w-full py-3 bg-transparent col-span-2 focus:border-active-accent border-2 border-white/20 rounded-xl focus:outline-none px-4"
                placeholder="Select your profile image*"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
                className="w-full py-3 bg-transparent focus:border-active-accent border-2 border-white/20 rounded-xl focus:outline-none px-4 col-span-2"
                placeholder="Your review*"></textarea>
              <div className=" col-span-2 sm:col-span-1">
                <button className="rounded-xl bg-active-accent w-full py-3 text-2xl font-bold">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-dark-secondary px-4 w-full rounded-xl grid grid-cols-2 gap-8">
        <div className="bg-dark-primary rounded-xl">
          <div className="p-8 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full">
              <img
                src={require("../assets/images/me.jpg")}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold py-6">David Lee</h2>
            <div className="w-full text-center flex items-center justify-center flex-col space-y-4">
              <FaQuoteLeft className="text-6xl" />
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                accusamus numquam fugiat! Deleniti quidem fuga dignissimos
                aliquid enim mollitia qui esse hic dolorum nulla officiis
                corporis accusamus, alias excepturi reprehenderit.
              </p>
              <div className="flex space-x-2">
                <FaStar className="text-[gold]" />
                <FaStar className="text-[gold]" />
                <FaStar className="text-[gold]" />
                <FaStar className="text-[gold]" />
                <FaStar className="text-[gold]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;