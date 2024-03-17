const express = require("express");
const userdata = require("../data.json");
const userController = require("../controller/user.controller");

const router = express.Router();

router.route("/").get(userController.getAllUsers).post();

router.route("/:id").get(userController.user);

module.exports = router;
