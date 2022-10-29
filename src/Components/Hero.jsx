import React, { useRef } from "react";
import Typed from "react-typed";
import emailjs from "@emailjs/browser";
import { memo } from "react";

function Hero() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dlla7eo",
        "template_1ogqzus",
        form.current,
        "85nEeGML6gHcBfow4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="lg:px-28 px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 duration-500">
        <div className=" lg:col-span-2 bg-dark-secondary rounded-xl  px-8 py-6">
          <div className="max-w-3xl lg:max-w-full items-center text-center lg:text-left lg:items-start flex flex-col h-full justify-center space-y-6">
            <div className="md:text-6xl text-5xl duration-500 text-secondary-accent font-black">
              <h1 className="">Accelerate</h1>
              <h1 className=""> Creative Design</h1>
              <h1 className="">at a Cosmic Scale</h1>
            </div>
            <p className="text-xl">
              Hire experts to create your website and boost your company's
              success. With Clean UI, you can count on top-notch web development
              services.
            </p>
            <h1 className="md:text-4xl text-3xl duration-500 font-bold text-secondary-accent">
              <Typed
                strings={[
                  "We help in Web Development Services.",
                  "We help in Web Design Services.",
                  "We help in Mobile App Development Services.",
                  "We help in Digital Marketing Services.",
                  "We help in E-Commerce Website Development Services.",
                ]}
                typeSpeed={75}
                backSpeed={75}
                loop={true}
              />
            </h1>
            {/* CTA */}
            <div className="">
              <button className="px-8 py-3 bg-contrast/80 hover:bg-contrast rounded-xl text-secondary-accent text-xl font-semibold">
                Get Started!
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-dark-secondary  space-y-6 rounded-xl px-4 py-6 flex flex-col items-center">
          <h1 className="text-4xl font-semibold text-center text-contrast">
            Book a Discovery Call Now
          </h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-lg">
            <input
              type="text"
              required
              name="name"
              className="px-6 py-3 focus:border-contrast bg-transparent w-full border border-accent/60 rounded-xl focus:outline-none"
              placeholder="Name*"
            />
            <input
              type="email"
              required
              name="email"
              className="px-6 py-3 focus:border-contrast bg-transparent w-full border border-accent/60 rounded-xl focus:outline-none"
              placeholder="Email*"
            />
            <input
              type="number"
              required
              name="contact"
              className="px-6 py-3 focus:border-contrast bg-transparent w-full border border-accent/60 rounded-xl focus:outline-none"
              placeholder="Contact*"
            />
            <textarea
              name="message"
              placeholder="Message*"
              id=""
              cols="30"
              rows="5"
              required
              className="px-6 py-3 focus:border-contrast bg-transparent w-full border border-accent/60 rounded-xl focus:outline-none"></textarea>
            <button className="bg-gradient-to-tr rounded-xl duration-200 hover:from-purple hover:to-orange from-orange to-purple w-full py-2 text-secondary-accent text-2xl">
              Contact Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
