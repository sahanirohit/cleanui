const express = require("express");
const router = express.Router();
const userModel = require("../models/signup");

router.post("/login", (req, res, next) => {
  userModel.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      console.log(user);
    } else {
      res.send({ message: "This email doesn't exist in our database." });
    }
  });
});

module.exports = router;
