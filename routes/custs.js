const cusController = require("../controllers/cusController");
const postController = require("../controllers/postController");
const catController = require("../controllers/catController");
const router = require("express").Router();

router.post("/pub/register", cusController.register);
router.post("/pub/login", cusController.login);
router.post("/pub/google-sign-in", cusController.googleLogin);
router.get("/pub/posts", postController.filterPage);
router.get("/pub/posts/:postId", postController.detail);
router.get("/pub/categories", catController.showCategories);

module.exports = router;
