const multer = require("multer");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("avatar");

// user registration api
router.post("/register", upload, controller.register);

// user login api
router.post("/login", controller.login);

module.exports = router;
