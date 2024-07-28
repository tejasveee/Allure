const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    apikey: {
      type: String,
      required: [true, "Please add the apikey"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", adminSchema);
