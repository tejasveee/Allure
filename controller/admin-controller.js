const Admin = require("../model/admin-model");
// const { nanoid } = require("nanoid");

const createAdmin = async (req, res) => {
  const { email, password } = req.body;

  // Generate a Nano ID
  //   const id = nanoid();
  //   console.log(`Nano ID: ${id}`);

  const apikey = "123456";

  //   if (apikey != process.env.API_KEY) {
  //     return res.json({
  //       status: "Failure",
  //       message: "Access Denied",
  //     });
  //   }

  try {
    const newAdmin = await Admin.create({
      email: email,
      password: password,
      apikey: apikey,
    });

    res.json({
      status: "success",
      newAdmin: newAdmin,
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

module.exports = {
  createAdmin,
};
