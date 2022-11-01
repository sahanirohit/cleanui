const mongoose = require("mongoose");

module.exports = connection = () =>
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log(error);
      console.log("Database could not connected");
    });
