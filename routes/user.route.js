const express = require("express");
const userdata = require("../data.json");
const userController = require("../controller/user.controller");
const counter = require("../middleware/counter");
const limiter = require("../middleware/limiter");

const router = express.Router();

router
  .route("/")
  /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(userController.getAllUsers)
  .post()
  .patch()
  .put();

router.route("/randomUser").get(counter, userController.randomUser);

router.route("/:id").get(limiter, counter, userController.user);

module.exports = router;
