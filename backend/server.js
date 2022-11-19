"use strict";
require("dotenv/config");
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

// app.use(controller);
const connection = require("./db");
const bodyParser = require("body-parser");
const session = require("express-session");

app.use("/images", express.static("public/uploads"));
app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "auth",
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    resave: false,
    saveUninitialized: false,
    cookie: { expires: 1000 * 60 * 60 * 24 },
  })
);

// connecting to database
connection();

// post request routes
app.use(require("./routes/route"));

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("listing...");
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}`));
