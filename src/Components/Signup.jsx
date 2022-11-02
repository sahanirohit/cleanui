import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// import { response } from "express";

function Signup() {
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {}, [profile]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profile", profile);
    formData.append("name", name);
    axios
      .post("http://localhost:5000/register", formData)
      .then((res) => {
        console.log(res.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section className="w-full text-[black]">
      <form
        onSubmit={handleSubmit}
        className="flex space-y-4 justify-center w-full items-center flex-col"
        encType="multipart/form-data">
        <input
          type="file"
          className="w-full focus:outline-none max-w-2xl bg-dark-secondary py-2"
          onChange={(event) => setProfile(event.target.files[0])}
          name="profile"
        />
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 focus:outline-none max-w-2xl bg-dark-secondary py-2"
          onChange={(event) => setName(event.target.value)}
          name="name"
        />

        <input
          type="submit"
          className=" bg-contrast py-1 px-3 cursor-pointer"
          value="Submit"
        />
      </form>
    </section>
  );
}

export default Signup;
