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
app.use(bodyParser.urlencoded({ extended: false }));

connection();

const upload = multer({ dest: "client/" });

// post request routes
app.post("/register", upload.single("profile"), (req, res) => {
  const userData = new signUpTemplate({
    profile: req.file,
    name: req.body.name,
  });
  userData.save();
  console.log("image saved");
});

// connecting to database

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}`));
