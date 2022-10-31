const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  fullName: String,
  username: String,
  image: String,
  email: String,
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", signUpTemplate);
