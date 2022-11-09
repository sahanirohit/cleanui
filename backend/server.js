"use strict";
require("dotenv/config");
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
// const controller = require("./controllers/controller");

// app.use(controller);
const connection = require("./db");
const bodyParser = require("body-parser");

app.use("/images", express.static("public/uploads"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to database
connection();

// post request routes
app.use(require("./routes/routes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("listing...");
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}`));
