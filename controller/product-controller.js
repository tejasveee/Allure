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
module.exports = {
  createProduct,
  getProducts,
};
