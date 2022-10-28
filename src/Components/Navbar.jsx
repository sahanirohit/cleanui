import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="lg:px-28 px-6 fixed top-0 w-full h-24 flex items-center justify-between">
      <div
        className={`flex items-center justify-between w-full md:w-auto ${
          open ? "z-50" : ""
        }`}>
        <h1 className="text-4xl font-black">CUI.</h1>
        <i
          onClick={() => setOpen(!open)}
          className={`fa-solid ${
            open ? "fa-xmark" : "fa-bars"
          } text-xl cursor-pointer md:hidden`}></i>
      </div>

      {/* Desktop Nav */}
      <ul className="md:flex hidden items-center">
        <li className="px-6 active-nav">
          <Link to={"/"} className="py-2">
            Home
          </Link>
        </li>
        <li className="px-6">
          <Link to={"/"} className="py-2">
            About
          </Link>
        </li>
        <li className="px-6">
          <Link to={"/"} className="py-2">
            Services
          </Link>
        </li>
        <li className="px-6">
          <Link to={"/"} className="py-2">
            Demos
          </Link>
        </li>
        <li className="px-3 hover:text-primary font-bold duration-200 hover:bg-accent/90 cursor-pointer border border-accent/80 py-0.5">
          <Link to={"/"} className="">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Nav */}
      <ul
        className={`md:hidden transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } duration-200 fixed py-28 space-y-6 text-xl inset-0`}>
        <li className="px-6 active-nav">
          <Link to={"/"} className="py-2">
            Home
          </Link>
        </li>
        <li className="px-6">
          <Link to={"/"} className="py-2">
            About
          </Link>
        </li>
        <li className="px-6">
          <Link to={"/"} className="py-2">
            Services
          </Link>
        </li>
        <li className="px-6">
          <Link to={"/"} className="py-2">
            Demos
          </Link>
        </li>
        <button className="px-6">
          <Link to={"/"} className="">
            Contact
          </Link>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
