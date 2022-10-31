import React, { useState } from "react";
import axios from "axios";
// import { response } from "express";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let formData = new FormData();

  const handleSubmit = (event) => {
    event.preventDefault();

    const registered = {
      fullName: fullName,
      username: username,
      file: file,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/app/signup", registered)
      .then((response) => console.log(response.data));
  };
  return (
    <section className="w-full text-[black]">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center w-full items-center flex-col"
        encType="multipart/form-data">
        <input
          type="text"
          placeholder="full name"
          className=""
          onChange={(event) => setFullName(event.target.value)}
          name="fullName"
          value={fullName}
        />
        <input
          type="text"
          placeholder="username"
          className=""
          name="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="file"
          className=""
          onChange={(event) => setFile(event.target.files[0])}
          name="file"
        />
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
          className=""
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          className=""
          name="password"
          onChange={(event) => setPassword(event.target.value)}
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
