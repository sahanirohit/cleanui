import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

function Testimonials() {
  const [user, setUser] = useState(null);
  const [review, setReview] = useState("");
  const [reviewPosted, setReviewPosted] = useState(false);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    // fetch auth user details
    axios.get("http://localhost:5000/auth").then(
      (res) => {
        if (res.data.loggedIn === true) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      },
      [reviewPosted]
    );

    // fetch all review data
    axios.get("http://localhost:5000/reviews").then((res) => {
      setAllData(res.data);
    });
  }, []);

  useEffect(() => {
    if (user) {
      const nameValue = [];
      allData.map((item) => {
        return nameValue.push(item.name);
      });

      if (nameValue.includes(user.fullname)) {
        setReviewPosted(true);
      }
    }
  });
  // console.log(reviewPosted);
  // post review
  const handleClientReview = (e) => {
    e.preventDefault();
    const reviewData = {
      message: review,
      name: user.fullname,
      avatar: user.avatar,
    };
    axios
      .post("http://localhost:5000/review", reviewData)
      .then((res) => {
        console.log(res);
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="lg:px-28 px-6 py-16">
      <ToastContainer />
      {/* Title */}
      <div className="text-center pb-16 flex items-center flex-col space-y-16">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-black text-secondary-accent tracking-widest">
            Testimonials
          </h1>
          <div className="relative before:absolute before:w-16 before:h-[2px] before:rounded-full before:bg-active-accent flex items-center justify-center before:bottom-0"></div>
        </div>
        {user && reviewPosted !== true ? (
          <div className="bg-dark-secondary gap-8 grid md:grid-cols-3 gap-y-8 md:gap-y-0 px-2 py-8 rounded-xl w-full">
            <div className="bg-dark-primary rounded-xl h-96 md:h-auto text-center items-center md:items-start md:text-left p-4 flex flex-col justify-between">
              <div className="">
                <h2 className="lg:text-4xl duration-500 text-3xl font-bold">
                  Write a review
                </h2>
                <p className="">
                  Please give few moment to write a review that help me to grow.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <i className="fa-solid fa-phone"></i>
                  <p className="">+91 89579 12038</p>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fa-solid fa-envelope"></i>
                  <p className="">rohitjobeis@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fa-solid fa-location"></i>
                  <p className="">Surat, Gujarat - India</p>
                </div>
              </div>
              <div className="flex space-x-4 text-2xl py-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
                  <FaFacebook className="text-[#3b5998] cursor-pointer duration-300 text-3xl" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
                  <FaInstagram className="text-[#8a3ab9] cursor-pointer duration-300 " />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
                  <FaTwitter className="text-[#00AACC] cursor-pointer duration-300 " />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform hover:-translate-y-2 duration-300 cursor-pointer">
                  <FaLinkedin className="text-[#3b5998] cursor-pointer duration-300" />
                </div>
              </div>
            </div>
            <div className=" md:col-span-2">
              <div className="">
                <form
                  onSubmit={handleClientReview}
                  className="grid grid-cols-2 gap-8"
                  method="post">
                  <textarea
                    name="message"
                    id="message"
                    onChange={(e) => setReview(e.target.value)}
                    cols="30"
                    rows="10"
                    className="w-full py-3 bg-transparent focus:border-active-accent border-2 border-white/20 rounded-xl focus:outline-none px-4 col-span-2"
                    placeholder="Your review*"></textarea>
                  <div className=" col-span-2 sm:col-span-1">
                    <button className="rounded-xl bg-active-accent w-full py-3 text-2xl font-bold">
                      Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="py-16 bg-dark-secondary px-4 w-full rounded-xl grid grid-cols-3 gap-8">
        {allData.map((item, index) => {
          return (
            <div key={index} className="bg-dark-primary rounded-xl">
              <div className="p-8 flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full">
                  <img
                    src={`uploads/${item.avatar}`}
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold py-6">{item.name}</h2>
                <div className="w-full text-center flex items-center justify-center flex-col space-y-4">
                  <FaQuoteLeft className="text-6xl text-[#e2e2e2]" />
                  <p className="">{item.message}</p>
                  <div className="flex space-x-2">
                    <FaStar className="text-[gold]" />
                    <FaStar className="text-[gold]" />
                    <FaStar className="text-[gold]" />
                    <FaStar className="text-[gold]" />
                    <FaStar className="text-[gold]" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Testimonials);
