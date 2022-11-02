"use strict";
require("dotenv/config");
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const signUpTemplate = require("./models/signup");
const fs = require("fs");
const path = require("path");

const connection = require("./db");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.slice(0, -4) + "-" + Date.now() + ".jpg");
  },
});

const upload = multer({ storage: storage }).single("profile");

// post request routes
app.post("/register", upload, (req, res, next) => {
  const userData = new signUpTemplate({
    profile: req.file.path,
    name: req.body.name,
  });
  userData.save();
  console.log(req.file);
  console.log("image saved");
});

// connecting to database

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("listing...");
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}`));
