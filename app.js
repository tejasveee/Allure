const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

var morgan = require("morgan");
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const adminRoute = require("./routes/admin-routes");
app.use("/api/admin", adminRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongodb: mongoose.connect(process.env.MONGO_URL);
