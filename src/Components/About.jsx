import React, { memo } from "react";
import { GoBrowser } from "react-icons/go";
import { BiDesktop, BiRocket } from "react-icons/bi";
import { GrAndroid } from "react-icons/gr";

const aboutSectionImage = [
  require("../assets/images/website-development.jpg"),
  require("../assets/images/businessprocess.png"),
  require("../assets/images/howitisdone.png"),
];
const aboutServiceData = [
  {
    icon: <BiDesktop />,
    title: "Software Development",
    content: `We provide Industrial Software development Enterprise Resource Products (ERP) Software Invoice-Inventory-Sales Softwares Customized Softwares as per requirements`,
  },
  {
    icon: <GrAndroid />,
    title: "Android Development",
    content: `We provide Hospital-Clinic Applications E-Commerce Applications School-Academy Applications Customized Applications as per requirements`,
  },
  {
    icon: <GoBrowser />,
    title: "Web Development",
    content: `We provide Hospital-Clinic Applications E-Commerce Applications School-Academy Applications Customized Applications as per requirements`,
  },
  {
    icon: <BiRocket />,
    title: "Digital Marketing",
    content: `We provide Hospital-Clinic Applications E-Commerce Applications School-Academy Applications Customized Applications as per requirements`,
  },
];

function About() {
  return (
    <section className="lg:px-28 px-6">
      <div className="text-center pb-16 flex items-center flex-col">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-black text-secondary-accent">About</h1>
          <p className="">
            We love to help you in all these service which we offer below. If
            you have any query then please contact us.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-1 bg-dark-secondary/60 rounded-xl">
          {aboutServiceData.map((item, index) => {
            return (
              <div key={index} className="flex gap-4 p-6">
                <div className=" shrink-0 w-14 h-14 rounded-full flex items-center justify-center border-dashed hover:border-contrast duration-200  hover:text-contrast border-2 border-accent">
                  {item.icon}
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold text-secondary-accent">
                    {item.title}
                  </h2>
                  <p className="">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          <img
            src={aboutSectionImage[0]}
            alt=""
            className="w-full h-full object-cover object-left rounded-xl"
          />
        </div>
        <div className=" bg-dark-secondary/60 rounded-xl">
          <img
            src={aboutSectionImage[1]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-between py-8 px-6 bg-dark-secondary/60 rounded-xl text-lg">
          <h2 className="text-3xl font-bold text-secondary-accent">
            Why your Business requires Digital Solutions ?
          </h2>
          <p className="">Day to day many business task needs to be perform.</p>
          <p className="">
            <strong className=" font-semibold text-secondary-accent">
              Software
            </strong>{" "}
            could increase efficiency and productivity to your business. Keeping
            your business process integrated at center where you can access
            organized data.
          </p>
          <p className="">
            <strong className=" font-semibold text-secondary-accent">
              Android application
            </strong>{" "}
            for your business can easily connect you with your software and
            website. This facility lets you access important and processed data
            of your software & website. Your presence on Google play lets your
            customer to stay connected with your business.
          </p>
          <p className="">
            <strong className=" font-semibold text-secondary-accent">
              {" "}
              Website
            </strong>{" "}
            is digital presense of your business in this world. Having website
            of your business is primary necessary in this era. People coming
            from web traffic converts them to your prospects.
          </p>
        </div>
        <div className=" bg-dark-secondary/60 flex flex-col justify-evenly rounded-xl px-6 py-8 text-lg">
          <h2 className="text-3xl font-bold text-secondary-accent">
            How it is done ?
          </h2>
          <h2 className="text-xl font-semibold text-secondary-accent">
            There are four steps in Software Development
          </h2>
          <p className="">1. We list your ideas and requirements.</p>
          <p className="">2. We plan execution time of the project.</p>
          <p className="">
            3. We design & code your requirements into software and application.
          </p>
          <p className="">
            4. We publish your software and application into your premises,
            Google Play and web as per your requirements.
          </p>
        </div>
        <div className=" bg-dark-secondary/60 rounded-xl">
          <img
            src={aboutSectionImage[2]}
            alt=""
            className=" w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default memo(About);
