const Product = require("../model/product-model");

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json({
      status: "success",
      allProducts: allProducts,
    });
  } catch (error) {
    console.log(error);

    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const getSkincareProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({ category: "skincare" });
    res.json({
      status: "success",
      allProducts: allProducts,
    });
  } catch (error) {
    console.log(error);

    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const getFragranceProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({ category: "fragrance" });
    res.json({
      status: "success",
      allProducts: allProducts,
    });
  } catch (error) {
    console.log(error);

    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  const { name, price, description, category, imageURL, brandName, adminID } =
    req.body;

  const apikey = req.query.apikey;

  if (apikey != process.env.API_KEY) {
    return res.json({
      status: "Failure",
      message: "Access Denied",
    });
  }

  try {
    const newProduct = await Product.create({
      name: name,
      price: price,
      description: description,
      category: category,
      imageURL: imageURL,
      brandName: brandName,
      adminID: apikey,
    });

    res.json({
      status: "success",
      newProduct: newProduct,
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const apikey = req.query.apikey;

  if (apikey != process.env.API_KEY) {
    res.json({
      status: "Failure",
      message: "Access Denied",
    });
  }

  try {
    const productID = req.query.id;

    const product = await Product.findByIdAndUpdate(productID, req.body);

    if (!product) {
      return res.json({
        status: "Failure",
        message: "product not found",
      });
    }

    res.json({
      status: "success",
      message: "product updated",
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const productID = req.query.id;
  const apikey = req.query.apikey;

  if (apikey != process.env.API_KEY) {
    res.json({
      status: "Failure",
      message: "Access Denied",
    });
  }
  try {
    const product = await Product.findByIdAndDelete(productID);

    if (!product) {
      return res.json({
        status: "Failure",
        message: "product not found",
      });
    }

    res.json({
      status: "success",
      message: "product deleted",
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const productID = req.query.id;

    const product = await Product.findById(productID);
    if (!product) {
      return res.json({
        status: "Failure",
        message: "product not found",
      });
    }

    res.json({
      status: "success",
      product: product,
    });
  } catch (error) {
    console.log(error);

    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getSkincareProducts,
  getFragranceProducts,
};
