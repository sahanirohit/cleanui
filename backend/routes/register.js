const multer = require("multer");
const express = require("express");
const router = express.Router();
const userModel = require("../models/signup");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("avatar");

// user registration api
router.post("/register", upload, (req, res, next) => {
  userModel.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      console.log("User already existed.");
      res.send({ message: "User already existed." });
      return true;
    } else {
      const userData = new userModel({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        avatar: req.file.path,
      });
      userData.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Registration completed successfully" });
        }
      });
    }
  });
});

// user login api
// router.post("/login", (res, req) => {
//   console.log(req.body);
// const [email, password] = req.body;
// console.log(email, password);
// userModel.findOne({ email: email }, (err, user) => {
//   if (user) {
//     if (password === user.password) {
//       res.send({ message: "Login successful", user: user });
//     } else {
//       res.send({ message: "Invalid password" });
//     }
//   } else {
//     res.send({ message: "User not registered" });
//   }
// });
// });

module.exports = router;
