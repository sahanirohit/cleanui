import React, { memo } from "react";

const demosImage = [
  {
    img: require("../assets/images/Clean UI.jpg"),
    title: "Minimal Agency",
    url: "https://rohitsahani.in/",
  },
  {
    img: require("../assets/images/Pacifico Clone.jpg"),
    title: "Pacifico Clone",
    url: "https://rohitsahani.in/demo/pacifico-clone/",
  },
  {
    img: require("../assets/images/Clean UI.jpg"),
    title: "Minimal Agency",
    url: "https://rohitsahani.in/",
  },
  {
    img: require("../assets/images/Clean UI.jpg"),
    title: "Minimal Agency",
    url: "https://rohitsahani.in/",
  },
  {
    img: require("../assets/images/Clean UI.jpg"),
    title: "Minimal Agency",
    url: "https://rohitsahani.in/",
  },
  {
    img: require("../assets/images/Clean UI.jpg"),
    title: "Minimal Agency",
    url: "https://rohitsahani.in/",
  },
];

function Portfolio() {
  return (
    <section className="lg:px-28 px-6 py-16">
      {/* Title */}
      <div className="text-center pb-16 flex items-center flex-col">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-black text-secondary-accent tracking-widest">
            Portfolio
          </h1>
          <div className="relative before:absolute before:w-16 before:h-[2px] before:rounded-full before:bg-active-accent flex items-center justify-center before:bottom-0"></div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {demosImage.map((item, index) => {
          return (
            <div className="" key={index}>
              <div className="border-2 group overflow-hidden relative cursor-pointer">
                <img
                  src={item.img}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute transform translate-y-full duration-300 group-hover:translate-y-0 group-hover:bg-dark-primary/80 inset-0 flex items-center justify-center">
                  <button className="px-8 py-2 bg-active-accent text-white font-bold">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      Preview
                    </a>
                  </button>
                </div>
              </div>

              <div className="py-6 text-center">
                <h1 className="text-2xl font-bold text-secondary-accent">
                  {item.title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Portfolio);
