const express = require("express");
let router = express.Router();

const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getSkincareProducts,
  getFragranceProducts,
} = require("../controller/product-controller");

router.route("/").post(createProduct);
router.route("/").get(getProducts);
router.route("/singleproduct").get(getSingleProduct);
router.route("/").put(updateProduct);
router.route("/").delete(deleteProduct);
router.route("/getskincare").get(getSkincareProducts);
router.route("/getfragrance").get(getFragranceProducts);

module.exports = router;
