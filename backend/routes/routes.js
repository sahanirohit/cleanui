const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const signUpTemplate = require("../models/signup");
const multer = require("multer");

// const path = require("path").basename(__dirname + "./upload");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   },
// });

// const upload = multer({ storage: storage }).single("file");

// router.post("/signup", upload, (req, res) => {
//   console.log(req.file.path);
//   const signUpUser = new signUpTemplate({
//     _id: new mongoose.Types.ObjectId(),
//     // file: req.file.path,
//     name: req.body.name,
//   });
//   signUpUser
//     .save()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       res.json(error);
//     });
// });

module.exports = router;
