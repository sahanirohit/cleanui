const multer = require("multer");
const userStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

exports.userProfile = multer({ storage: userStorage }).single("avatar");

const projectStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/projects");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

exports.projectImage = multer({ storage: projectStorage }).single("image");
