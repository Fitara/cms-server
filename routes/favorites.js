const favController = require("../controllers/favController");
const router = require("express").Router();

router.get("/pub/favorites", favController.showFav);
router.post("/pub/favorites/:postId", favController.addFav);
router.delete("/pub/favorites/:postId", favController.delete);

module.exports = router;
