import React from "react";
import { memo } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const url = useLocation();
  return (
    <header className="h-20">
      <nav className="lg:px-28 z-50 bg-dark-primary px-6 fixed top-0 w-full h-20 flex items-center justify-between">
        <div
          className={`flex items-center text-contrast justify-between w-full md:w-auto ${
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
          <li className={`px-6 ${url.pathname === "/" ? "active-nav" : ""}`}>
            <Link to={"/"} className="py-2">
              Home
            </Link>
          </li>
          <li
            className={`px-6 ${url.pathname === "/about" ? "active-nav" : ""}`}>
            <Link to={"/about"} className="py-2">
              About
            </Link>
          </li>
          <li
            className={`px-6 ${
              url.pathname === "/services" ? "active-nav" : ""
            }`}>
            <Link to={"/services"} className="py-2">
              Services
            </Link>
          </li>
          <li
            className={`px-6 ${
              url.pathname === "/portfolio" ? "active-nav" : ""
            }`}>
            <Link to={"/portfolio"} className="py-2">
              Portfolio
            </Link>
          </li>
          <li
            className={`px-6 ${
              url.pathname === "/testimonial" ? "active-nav" : ""
            }`}
            onClick={() => setOpen(!open)}>
            <Link to={"/testimonial"} className="py-2">
              Testimonial
            </Link>
          </li>
        </ul>
        <Link
          to={"/contact"}
          className="px-3 text-white hidden md:block rounded-md bg-contrast font-semibold cursor-pointer border border-contrast py-1">
          Contact
        </Link>
        {/* Mobile Nav */}
        <ul
          className={`md:hidden transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } duration-200 fixed py-28 space-y-6 text-xl inset-0 bg-dark-primary w-full h-full`}>
          <li
            className={`px-6 ${url.pathname === "/" ? "active-nav" : ""}`}
            onClick={() => setOpen(!open)}>
            <Link to={"/"} className="py-2">
              Home
            </Link>
          </li>
          <li
            className={`px-6 ${url.pathname === "/about" ? "active-nav" : ""}`}
            onClick={() => setOpen(!open)}>
            <Link to={"/about"} className="py-2">
              About
            </Link>
          </li>
          <li
            className={`px-6 ${
              url.pathname === "/services" ? "active-nav" : ""
            }`}
            onClick={() => setOpen(!open)}>
            <Link to={"/services"} className="py-2">
              Services
            </Link>
          </li>
          <li
            className={`px-6 ${
              url.pathname === "/portfolio" ? "active-nav" : ""
            }`}
            onClick={() => setOpen(!open)}>
            <Link to={"/portfolio"} className="py-2">
              Portfolio
            </Link>
          </li>
          <li
            className={`px-6 ${
              url.pathname === "/testimonial" ? "active-nav" : ""
            }`}
            onClick={() => setOpen(!open)}>
            <Link to={"/testimonial"} className="py-2">
              Testimonial
            </Link>
          </li>
          <button
            className={`px-6 ${
              url.pathname === "/contact" ? "active-nav" : ""
            }`}
            onClick={() => setOpen(!open)}>
            <Link to={"/contact"} className="">
              Contact
            </Link>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default memo(Navbar);
