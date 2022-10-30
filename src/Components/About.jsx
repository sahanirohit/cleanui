import React, { memo } from "react";

import me from "../assets/images/me.jpg";

function About() {
  return (
    <section className="lg:px-28 px-6">
      <div className="text-center pb-16 flex items-center flex-col">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-black text-secondary-accent tracking-widest">
            About Me
          </h1>
          <div className="relative before:absolute before:w-16 before:h-[2px] before:rounded-full before:bg-active-accent flex items-center justify-center before:bottom-0"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
        <div className="flex flex-col space-y-8">
          <div className="">
            <div className="space-y-4">
              <div className="relative before:absolute before:w-12 before:h-[2px] before:rounded-full before:bg-active-accent before:left-0 before:top-0"></div>
              <h1 className="text-3xl font-black text-secondary-accent">
                My Story
              </h1>
            </div>
            <p className="max-w-md pt-3 text-xl">
              Hi, my name is Rohit Sahani. Born in 2002 and I’m from India.
              Since young age, I’m working on design and development projects.
              Because I love to design and code.
            </p>
          </div>
          <div className="">
            <div className="space-y-4">
              <div className="relative before:absolute before:w-12 before:h-[2px] before:rounded-full before:bg-active-accent before:left-0 before:top-0"></div>
              <h1 className="text-3xl font-black text-secondary-accent">
                My Skills
              </h1>
            </div>
            <div className="grid grid-cols-2 text-xl">
              <ul className="pt-3 flex flex-col space-y-4">
                <li className="">HTML, CSS, Javascript</li>
                <li className="">React JS</li>
                <li className="">Tailwind CSS</li>
                <li className="">Figma UI/UX</li>
              </ul>
              <ul className="pt-3 flex flex-col space-y-4">
                <li className="">Node JS</li>
                <li className="">Flutter</li>
                <li className="">Swift</li>
                <li className="">MangoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex h-[28rem]">
          <img
            src={me}
            loading="lazy"
            alt="me"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default memo(About);
