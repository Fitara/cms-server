const express = require("express");
const authen = require("../middlewares/authen");
const router = express.Router();
const users = require("./users");
const custs = require("./custs")
const posts = require("./posts");
const categories = require("./categories");
const favorites = require("./favorites")
const histories = require("./histories");

router.use(users);
router.use(custs)
router.use(posts);
router.use(categories);
router.use(authen);
router.use(favorites)
router.use(histories);

module.exports = router;
