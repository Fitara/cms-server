const catController = require("../controllers/catController")
const router = require("express").Router()

router.get("/categories", catController.showCategories)
router.post("/categories", catController.createCat)
router.get("/categories/:id", catController.categoryById)
router.put("/categories/:id", catController.replace)
router.delete("/categories/:id", catController.delete)

module.exports = router