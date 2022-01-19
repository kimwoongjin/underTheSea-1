const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/signup", controllers.signup);
router.post("/login", controllers.login);
router.post("/logout", controllers.logout);
router.delete("/", controllers.signout);
router.get("/manage", controllers.usermanage);
router.get("/tips", controllers.usertips);
router.get("/comments/:page_num", controllers.usercomments);
router.patch("/password", controllers.editpwd);
router.get("/auth/google", controllers.authgoogle);
router.get("/auth/google/callback", controllers.googlecallback);
router.get("/auth/kakao", controllers.authkakako);
router.get("/auth/kakao/callback", controllers.kakaocallback);

module.exports = router;
