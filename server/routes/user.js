const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/signup", controllers.signup);
router.post("/login", controllers.login);
router.post("/logout", controllers.logout);
router.delete("/", controllers.signout);
router.get("/", controllers.userinfo);
router.patch("/password", controllers.editpwd);

module.exports = router;
