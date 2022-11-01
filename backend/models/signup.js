const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  // file: { type: String, required: true },
  // name: { type: String },
});

module.exports = mongoose.model("user", signUpTemplate);
