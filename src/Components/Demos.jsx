import React from "react";

const demosImage = [
  {
    img: require("../assets/images/Minimal Agency.png"),
    title: "Minimal Agency",
    url: "https://rohitsahani.in/",
  },
  {
    img: require("../assets/images/Pacifico - Multipurpose Landing Page.png"),
    title: "Pacifico Clone",
    url: "https://rohitsahani.in/demo/pacifico-clone/",
  },
];

function Demos() {
  return (
    <section className="lg:px-28 px-6 py-16">
      <div className="grid grid-cols-3 gap-8">
        {demosImage.map((item, index) => {
          return (
            <div className=" bg-dark-secondary rounded-xl" key={index}>
              <div className="h-60">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full rounded-t-xl object-cover"
                />
              </div>
              <div className="py-8 px-8 space-y-6">
                <h1 className="text-2xl font-bold text-secondary-accent">
                  {item.title}
                </h1>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-contrast text-secondary-contrast ">
                    <a href={item.url} className="py-2 w-full">
                      Preview
                    </a>
                  </button>
                  <button className="flex-1 bg-contrast text-secondary-contrast py-2">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Demos;
