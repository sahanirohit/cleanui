const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  fullname: { type: String },
  email: { type: String },
  password: { type: String },
  avatar: { type: String },
});

module.exports = new mongoose.model("user", userModel);
