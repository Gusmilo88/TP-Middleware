const router = require("express").Router();
const { index, admin } = require("../controllers/mainController")

router
    .get("/", index)
    .get("/admin", admin)

module.exports = router