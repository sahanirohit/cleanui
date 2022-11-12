const mongoose = require("mongoose");

const projectModel = new mongoose.Schema({
  project: { type: String },
  projectURL: { type: String },
  image: { type: String },
});

module.exports = new mongoose.model("project", projectModel);
