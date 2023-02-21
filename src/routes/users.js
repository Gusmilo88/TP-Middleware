const { register, login, profile } = require("../controllers/usersControllers");

const router = require("express").Router();

/* /users */

router
    .get("/register", register)
    .get("/login", login)
    .get("/profile", profile)

module.exports = router