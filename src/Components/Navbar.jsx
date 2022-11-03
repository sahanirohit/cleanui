import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { memo } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [profile, setProfile] = useState(false);
  const [login, setLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const url = useLocation();

  // login
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");

  // regsiter API
  const handleRegister = (e) => {
    e.preventDefault();
    const userData = new FormData();
    userData.append("fullname", fullname);
    userData.append("email", email);
    userData.append("password", password);
    userData.append("avatar", avatar);

    axios
      .post("http://localhost:5000/register", userData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // login API
  const userLogin = (e) => {
    e.preventDefault();
    // const loginData = new FormData();
    // loginData.append("email", loginemail);
    // loginData.append("password", loginpassword);

    const user = {
      email: loginemail,
      password: loginpassword,
    };

    axios
      .post("http://localhost:5000/login", user)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.user);
      })
      .catch((error) => {
        console.log(error.message);
        console.log("user login failed");
      });
  };

  useEffect(() => {
    if (!profile) {
      setLogin(false);
    }
  }, [profile]);

  const handleLogin = () => {
    setLogin(!login);
  };

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
        <div className="flex space-x-3">
          <Link
            to={"/contact"}
            className="px-3 text-white hidden md:block rounded-md bg-contrast font-semibold cursor-pointer border border-contrast py-1">
            Contact
          </Link>
          <Link
            to={""}
            onClick={() => setProfile(!profile)}
            className="px-4 text-white hidden md:block rounded-md font-semibold cursor-pointer border border-white py-1">
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>
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

      <div
        id="profile"
        className={`flex items-center z-50 shadow-lg justify-center bg-dark-primary/70 w-full h-full ${
          profile ? "fixed" : "hidden"
        }`}>
        <div className="bg-white text-dark-primary font-[poppins] p-8 relative">
          <div className={`${login ? "hidden" : ""}`}>
            <h2 className="text-2xl text-center pb-4">SIGN UP TO CLEAN UI</h2>
            <div className="">
              <form
                onSubmit={handleRegister}
                encType="multipart/form-data"
                method="post"
                className="flex flex-col space-y-3">
                <div className="space-y-2">
                  <label htmlFor="fullname">What's your name?</label>
                  <input
                    type="text"
                    onChange={(e) => setFullname(e.target.value)}
                    name="fullname"
                    className="w-full py-3 px-4 bg-dark-secondary text-white focus:outline-none"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">What's your email?</label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className="w-full py-3 px-4 bg-dark-secondary text-white focus:outline-none"
                    placeholder="Email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password">What's your password?</label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-3 px-4 bg-dark-secondary text-white focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="profile">Upload your profile picture.</label>
                  <input
                    type="file"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    name="avatar"
                    className="w-full py-3 px-4 bg-dark-secondary text-white focus:outline-none"
                  />
                </div>
                <button className="py-3 w-full bg-active-accent text-white font-bold">
                  Get Started
                </button>
                <div className="flex justify-between pt-4 text-[blue]">
                  <h2 onClick={handleLogin} className="cursor-pointer">
                    Sign in to your account
                  </h2>
                  <h2 className="cursor-pointer">Forgot your password?</h2>
                </div>
              </form>
            </div>
          </div>
          <div className={`${login ? "" : "hidden"}`}>
            <h2 className="text-2xl text-center pb-4">LOG IN TO CLEAN UI</h2>
            <div className="">
              <form
                onSubmit={userLogin}
                encType="multipart/form-data"
                method="post"
                className="flex flex-col space-y-3">
                <div className="space-y-2">
                  <label htmlFor="email">What's your email?</label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full py-3 px-4 bg-dark-secondary text-white focus:outline-none"
                    placeholder="Email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password">What's your password?</label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full py-3 px-4 bg-dark-secondary text-white focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <button className="py-3 w-full bg-active-accent text-white font-bold">
                  Login
                </button>
                <div className="flex justify-between pt-4 text-[blue]">
                  <h2 onClick={handleLogin} className="cursor-pointer">
                    Create Account
                  </h2>
                  <h2 className="cursor-pointer">Forgot your password?</h2>
                </div>
              </form>
            </div>
          </div>
          <div
            onClick={() => setProfile(!profile)}
            className="absolute right-3 top-3 w-8 h-8 cursor-pointer flex items-center justify-center bg-secondary-contrast text-white">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(Navbar);
