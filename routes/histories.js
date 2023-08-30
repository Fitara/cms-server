const histController = require("../controllers/histController")
const router = require("express").Router()

router.get("/histories", histController.histories)

module.exports = router