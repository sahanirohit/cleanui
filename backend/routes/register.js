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

module.exports = router;
