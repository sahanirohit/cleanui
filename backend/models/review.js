const mongoose = require("mongoose");

const clientReview = new mongoose.Schema({
  message: { type: String },
  name: { type: String },
  avatar: { type: String },
});

module.exports = new mongoose.model("review", clientReview);
