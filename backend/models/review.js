const mongoose = require("mongoose");

const clientReview = new mongoose.Schema({
  message: { type: String, required: true },
});

module.exports = new mongoose.model("review", clientReview);
