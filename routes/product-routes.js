const express = require("express");
let router = express.Router();

const {
  createProduct,
  getProducts,
} = require("../controller/product-controller");

router.route("/").post(createProduct);
router.route("/").get(getProducts);

module.exports = router;
