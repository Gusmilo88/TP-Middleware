const router = require("express").Router();
const { index, admin, notEntry } = require("../controllers/mainController");
const acessAdmin = require("../middlewares/acessAdmin");

router
    .get("/", index)
    .get("/admin",acessAdmin, admin)
    .get("/notEntry",notEntry)

module.exports = router