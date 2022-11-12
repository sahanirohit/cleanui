const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const middleware = require("../middleware/middleware");

// user registration api
router.post("/register", middleware.userProfile, controller.register);

// user login api
router.post("/login", controller.login);

// auth
router.get("/auth", controller.auth);

// logout
router.get("/logout", controller.logout);

// review api
router.post("/review", controller.review);

// get review data
router.get("/reviews", controller.reviews);

// get project data
router.get("/projectDetails", controller.projectDetails);

// post projet data
router.post("/project", middleware.projectImage, controller.projects);

module.exports = router;
