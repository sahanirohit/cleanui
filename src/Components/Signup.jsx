import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// import { response } from "express";

function Signup() {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(file);
  }, [file]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const registered = {
      file: file,
      name: name,
    };

    axios
      .post("http://localhost:5000/signup", registered)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log("Hello");
        console.log(error.message);
      });
  };
  return (
    <section className="w-full text-[black]">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center w-full items-center flex-col"
        enctype="multipart/form-data">
        <input
          type="file"
          className=""
          onChange={(event) => setFile(event.target.files[0])}
          name="file"
        />
        <input
          type="text"
          className=""
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
