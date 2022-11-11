const userModel = require("../models/signup");
const clientReview = require("../models/review");

// login controller
exports.login = (req, res) => {
  userModel.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      if (req.body.password === user.password) {
        req.session.user = user;
        res.send({ message: "Login successfull", user: user });
        // session.user_email = user.email;
        // console.log(session.email);
      } else {
        res.send({ message: "Invalid password" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
};

// login auth controller
exports.auth = (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
};

// logout controller
exports.logout = (req, res) => {
  req.session.destroy();
  res.send("Logout");
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

// clients review controller
exports.review = (req, res) => {
  const clientData = new clientReview({
    message: req.body.message,
    name: req.body.name,
    avatar: req.body.avatar,
  });
  console.log(req.body);
  clientData.save((err) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send({ message: "Review posted succssfully" });
    }
  });
};

// get client review
exports.reviews = (req, res) => {
  clientReview.find((err, val) => {
    if (err) {
      console.log(err);
    } else {
      res.send(val);
    }
  });
};
