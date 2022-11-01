const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  profile: { type: String },
  name: { type: String },
});

module.exports = new mongoose.model("user", signUpTemplate);
