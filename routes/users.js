const userController = require("../controllers/userController")
const router = require("express").Router()

router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/google-sign-in", userController.google)

module.exports = router