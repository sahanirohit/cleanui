import React, { memo, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Portfolio() {
  const url = useLocation();
  const [project, setProject] = useState("");
  const [projectURL, setProjectURL] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState(null);
  const [projectData, setProjectData] = useState([]);

  var config = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };

  useEffect(() => {
    // get project data
    axios
      .get("https://cleanui.herokuapp.com/projectDetails", config)
      .then((res) => {
        setProjectData(res.data);
      });

    // fetch auth user details
    axios.get("https://cleanui.herokuapp.com/auth", config).then((res) => {
      if (res.data.loggedIn === true) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    });
  }, []);

  // check isUser an Admin or not
  const isAdmin = () => {
    if (user) {
      if (user.email === "rohitjobeis@gmail.com") {
        return true;
      } else {
        return false;
      }
    }
  };

  // project data upload function
  const projectUpload = (e) => {
    e.preventDefault();
    if (project === "") {
      toast.info("What's your project name?", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (projectURL === "") {
      toast.info("What's your project URL?", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (image === "") {
      toast.info("Upload your project image.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      const projectDetails = new FormData();
      projectDetails.append("project", project);
      projectDetails.append("projectURL", projectURL);
      projectDetails.append("image", image);
      axios
        .post("https://cleanui.herokuapp.com/project", projectDetails, config)
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };

  return (
    <section className="lg:px-28 px-6 py-16">
      <ToastContainer />
      {/* Title */}
      <div className="text-center pb-16 flex items-center flex-col">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-black text-secondary-accent tracking-widest">
            Portfolio
          </h1>
          <div className="relative before:absolute before:w-16 before:h-[2px] before:rounded-full before:bg-active-accent flex items-center justify-center before:bottom-0"></div>
        </div>
      </div>
      {url.pathname === "/portfolio" && isAdmin() ? (
        <div className="grid grid-cols-3 pb-16">
          <div className=""></div>
          <div className="">
            <form
              encType="multipart/form-data"
              onSubmit={projectUpload}
              className="flex flex-col space-y-3">
              <div className="space-y-2">
                <label htmlFor="project">What's your project name?</label>
                <input
                  type="text"
                  onChange={(e) => setProject(e.target.value)}
                  name="project"
                  value={project}
                  className="w-full py-3 px-4 bg-dark-secondary text-white focus:outline-none"
                  placeholder="Project Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="projectURL">What's your project URL?</label>
                <input
                  type="text"
                  onChange={(e) => setProjectURL(e.target.value)}
                  name="projectURL"
                  value={projectURL}
                  className="w-full py-3 px-4 bg-dark-secondary text-white focus:outline-none"
                  placeholder="URL"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="image">Upload your project image.</label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  name="image"
                  className="w-full py-3 px-4 bg-dark-secondary text-white focus:outline-none"
                />
              </div>
              <button className="py-3 w-full bg-active-accent text-white font-bold">
                Upload
              </button>
            </form>
          </div>
          <div className=""></div>
        </div>
      ) : (
        ""
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((item, index) => {
          return (
            <div className="" key={index}>
              <div className="border-2 group overflow-hidden relative cursor-pointer">
                <img
                  src={`projects/${item.image}`}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute transform translate-y-full duration-300 group-hover:translate-y-0 group-hover:bg-dark-primary/80 inset-0 flex items-center justify-center">
                  {/* <button className=""> */}
                  <a
                    href={item.projectURL}
                    target="_blank"
                    className="px-8 py-2 bg-active-accent text-white font-bold"
                    rel="noopener noreferrer">
                    Preview
                  </a>
                  {/* </button> */}
                </div>
              </div>

              <div className="py-6 text-center">
                <h1 className="text-2xl font-bold text-secondary-accent">
                  {item.project}
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
