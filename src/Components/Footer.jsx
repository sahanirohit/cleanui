import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { memo } from "react";

function Footer() {
  return (
    <footer className="lg:px-28 px-6 bg-dark-secondary pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 pb-8 gap-12 md:gap-6">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-black text-contrast">CUI.</h1>
          <p className="text-lg">
            Hire experts to create your website and boost your company's
            success. With Clean UI, you can count on top-notch web development
            services.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-secondary-accent">
            Company
          </h2>
          <ul className="text-xl flex flex-col space-y-3">
            <li className="duration-300 hover:translate-x-3 transform hover:text-secondary-accent">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="duration-300 hover:translate-x-3 transform hover:text-secondary-accent">
              <Link to={"/services"}>Services</Link>
            </li>
            <li className="duration-300 hover:translate-x-3 transform hover:text-secondary-accent">
              <Link to={"/demos"}>Demos</Link>
            </li>
            <li className="duration-300 hover:translate-x-3 transform hover:text-secondary-accent">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-secondary-accent">
            Follow Us
          </h2>
          <div className="flex space-x-4 text-2xl">
            <FaFacebook className="hover:text-[#0047CB] cursor-pointer duration-300 transform hover:-translate-y-2" />
            <FaInstagram className="hover:text-[#CC0063] cursor-pointer duration-300 transform hover:-translate-y-2" />
            <FaTwitter className="hover:text-[#00AACC] cursor-pointer duration-300 transform hover:-translate-y-2" />
            <FaLinkedin className="hover:text-[#0047CB] cursor-pointer duration-300 transform hover:-translate-y-2" />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-secondary-accent">
            Subscribe our newsletter to get updates.
          </h2>
          <input
            type="email"
            className="px-4 py-3 bg-transparent border border-accent w-full focus:outline-none focus:border-contrast"
            placeholder="Enter your email..."
          />
          <button className="px-4 py-3 text-xl bg-contrast text-white">
            Subscribe
          </button>
        </div>
      </div>

      <div className="relative flex lg:flex-row flex-col text-center lg:text-left lg:items-start space-y-4 lg:space-y-0 items-center justify-between before:absolute before:w-full before:h-[1px] before:bg-accent before:left-0 before:top-0 py-8">
        {/* <div className="relative before:absolute before:w-full before:h-[1px] before:bg-accent before:left-0 before:bottom-0"></div> */}
        <h2 className="text-lg">
          Copyright &copy; 2022 all right reserved by{" "}
          <strong className=" text-secondary-accent">Clean UI</strong>. Design
          by <strong className=" text-contrast underline">Rohit Sahani</strong>.
        </h2>
        <ul className="text-lg flex space-x-3">
          <li className="hover:text-secondary-accent">
            <Link to={"/about"}>Privacy Policy</Link>
          </li>
          <li className="hover:text-secondary-accent">
            <Link to={"/services"}>Term & Condition</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default memo(Footer);
