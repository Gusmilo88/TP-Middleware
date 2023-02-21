const { list, detail } = require("../controllers/productsControllers");

const router = require("express").Router();

/* /products */

router
    .get("/", list)
    .get("/detail/:id", detail)

module.exports = router