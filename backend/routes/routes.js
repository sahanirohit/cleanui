const express = require("express");
const router = express.Router();
const signUpTemplate = require("../models/signup");
const multer = require("multer");
const upload = multer({ dest: "../public/uploads" });

router.post("/signup", upload.single("file"), (req, res, next) => {
  const signUpUser = new signUpTemplate({
    fullName: req.body.fullName,
    username: req.body.username,
    image: req.file.filename,
    email: req.body.email,
    password: req.body.password,
  });
  signUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
