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
          <h1 className="text-4xl font-black text-secondary-accent">
            Services
          </h1>
          <p className="">
            We love to help you in all these service which we offer below. If
            you have any query then please contact us.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {serviceData.map((item, index) => {
          return (
            <div
              className="flex flex-col space-y-4  bg-dark-secondary p-4 rounded-xl"
              key={index}>
              <div className="h-60 overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  loading="lazyload"
                  alt=""
                  className=" rounded-xl w-full h-full cursor-pointer transform hover:scale-110 duration-300 object-cover object-center"
                />
              </div>
              <h2 className="text-xl font-semibold text-contrast">
                {item.title}
              </h2>
              <p className="">{item.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Services);
