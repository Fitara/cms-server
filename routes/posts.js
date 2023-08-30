const postController = require("../controllers/postController");
const author = require("../middlewares/author");
const router = require("express").Router();

router.post("/posts", postController.createPost);
router.get("/posts", postController.showPosts);
router.get("/posts/:id", postController.findById);
router.put("/posts/:id", author, postController.replace)
router.patch("/posts/:id", author, postController.modify)
router.delete("/posts/:id", author, postController.delete);

module.exports = router;
