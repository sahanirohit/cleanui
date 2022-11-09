const express = require("express");
const userModel = require("../models/signup");
const session = require("express-session");
const router = express.Router();
const cookieParser = require("cookie-parser");

router.use(cookieParser());

const oneDay = 1000 * 60 * 60 * 24;
router.use(
  session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);
// login controller
exports.login = (req, res) => {
  userModel.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      if (req.body.password === user.password) {
        res.send({ message: "Login successfull", user: user });
      } else {
        res.send({ message: "Invalid password" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
};

// register controller
exports.register = (req, res) => {
  userModel.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      console.log("User already existed.");
      next();
      return res.send({ message: "User already existed." });
    } else {
      const { fullname, email, password, avatar } = req.body;
      if (fullname === "" || email === "" || password === "" || avatar === "") {
        res.send("All fields are required!!");
      } else {
        const userData = new userModel({
          fullname: req.body.fullname,
          email: req.body.email,
          password: req.body.password,
          avatar: req.file.filename,
        });
        userData.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "Registration completed successfully" });
          }
        });
      }
    }
  });
};
