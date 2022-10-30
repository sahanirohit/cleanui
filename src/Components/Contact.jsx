import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="lg:px-28 px-6 py-20">
      <div className="text-center pb-16 flex items-center flex-col">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-black text-secondary-accent tracking-widest">
            Contact Us
          </h1>
          <div className="relative before:absolute before:w-16 before:h-[2px] before:rounded-full before:bg-active-accent flex items-center justify-center before:bottom-0"></div>
          <p className=" tracking-wider">
            Any question or remarks? Just write us a message!
          </p>
        </div>
      </div>
      <div className="bg-dark-secondary grid md:grid-cols-3 gap-y-8 md:gap-y-0 px-2 py-8 rounded-xl w-full">
        <div className="bg-dark-primary rounded-xl h-96 md:h-auto text-center items-center md:items-start md:text-left p-4 flex flex-col justify-between">
          <div className="">
            <h2 className="lg:text-4xl duration-500 text-3xl font-bold">
              Contact Information
            </h2>
            <p className="">Say something to start a live chat!</p>
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
              type="email"
              className="w-full py-3 bg-transparent focus:border-active-accent border-2 border-white/20 rounded-xl focus:outline-none px-4"
              placeholder="Email*"
            />
            <input
              type="text"
              className="w-full py-3 bg-transparent focus:border-active-accent border-2 border-white/20 rounded-xl focus:outline-none px-4"
              placeholder="Phone Number*"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              className="w-full py-3 bg-transparent focus:border-active-accent border-2 border-white/20 rounded-xl focus:outline-none px-4 col-span-2"
              placeholder="Message*"></textarea>
            <div className=" col-span-2 sm:col-span-1">
              <button className="rounded-xl bg-active-accent w-full py-3 text-2xl font-bold">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
