import React, { memo } from "react";

const serviceData = [
  {
    img: require("../assets/images/website-development.jpg"),
    title: "Website Design & Development",
    content:
      "We use latest Frontend framework like React.JS, Angular, Vue etc to create modern UI/UX Design.",
  },
  {
    img: require("../assets/images/app-development.jpg"),
    title: "Mobile App Development",
    content:
      "We use Flutter, React Native to create cross platform UI/UX android applications.",
  },
  {
    img: require("../assets/images/software-development.jpg"),
    title: "Software Development",
    content: "We use latest .Net framework to develop software applications.",
  },
  {
    img: require("../assets/images/digital-marketing.jpg"),
    title: "Digital Marketing",
    content: "We use latest .Net framework to develop software applications.",
  },
  {
    img: require("../assets/images/ecommerce-development.jpg"),
    title: "E-Commerce Website Development",
    content: "We use latest .Net framework to develop software applications.",
  },
  {
    img: require("../assets/images/web-hosting-services.jpg"),
    title: "Web Hosting Services",
    content: "We use latest .Net framework to develop software applications.",
  },
];

function Services() {
  return (
    <section className="lg:px-28 px-6 py-16">
      <div className="text-center pb-16 flex items-center flex-col">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-black text-secondary-accent tracking-widest">
            Services
          </h1>
          <div className="relative before:absolute before:w-16 before:h-[2px] before:rounded-full before:bg-active-accent flex items-center justify-center before:bottom-0"></div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map((item, index) => {
          return (
            <div
              className="flex flex-col space-y-4  bg-dark-secondary p-4 rounded-xl"
              key={index}>
              <div className="sm:h-60 h-72 overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  loading="lazy"
                  alt=""
                  className=" rounded-xl w-full h-full cursor-pointer transform hover:scale-110 duration-300 object-cover object-center"
                />
              </div>
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="">{item.content}</p>
              <div className="">
                <button className="px-4 py-1.5 bg-contrast text-white font-bold">
                  Know more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Services);
