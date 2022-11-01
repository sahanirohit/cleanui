const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const query = require("./routes/routes");
const connection = require("./db");
const app = express();
const multer = require("multer");

// connecting to database
connection();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.filename + ".jpg");
    },
  }),
}).single("file_name");

// app.use(express.static("../backend/upload"));

app.use(cors());
app.use(express.json());
app.use(query);
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", upload, (req, res) => {
  res.send("uploaded");
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}`));
