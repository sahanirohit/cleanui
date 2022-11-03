const express = require("express");
const router = express.Router();
const userModel = require("../models/signup");

router.post("/login", (req, res) => {
  //   const [email, password] = req.body;
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
});

module.exports = router;
