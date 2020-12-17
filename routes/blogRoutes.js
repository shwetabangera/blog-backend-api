const router = require("express").Router();

const { getAllBlogs, getblogById } = require("../controller/blogController.js");

router.route("/").get(getAllBlogs);
router.route("/:id").get(getblogById);

module.exports = router;
