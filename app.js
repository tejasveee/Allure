const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

var morgan = require("morgan");
app.use(morgan("tiny"));

const adminRoute = require("./routes/admin-routes");
app.use("/api/admin", adminRoute);

const productRoute = require("./routes/product-routes");
app.use("/api/product", productRoute);

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});

mongodb: mongoose.connect(process.env.MONGO_URL);
