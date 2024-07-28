const express = require("express");
let router = express.Router();

const { createAdmin } = require("../controller/admin-controller");

router.route("/").post(createAdmin);

module.exports = router;
