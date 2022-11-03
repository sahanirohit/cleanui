const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true },
});

module.exports = new mongoose.model("user", userModel);
