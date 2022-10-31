const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);

app.listen(port, () => console.log(`Server is running at port: ${port}`));
