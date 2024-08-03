const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the product name"],
    },
    price: {
      type: Number,
      required: [true, "Please add the product price label"],
    },
    description: {
      type: String,
      required: [true, "Please add the description"],
    },
    category: {
      type: String,
      required: [true, "Please add the description"],
    },
    imageURL: {
      type: String,
      required: [true, "Please add the image of then product"],
    },
    brandName: {
      type: String,
      required: [true, "Please add the brandname of the product"],
    },
    adminID: {
      type: String,
      required: [true, "Please add the adminID"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
