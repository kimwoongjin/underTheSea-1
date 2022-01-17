const controllers = require("../controllers");
const express = require("express");
const exactfishinfo = require("../controllers/fish/exactfishinfo");
const router = express.Router();

// router.get("?fish_name", controllers.fishinfo);
router.post("/include", controllers.fishinfo);
router.get("/all/:limit", controllers.allfishinfo);
router.post("/one", controllers.exactfishinfo);
router.get("/fishnamelist", controllers.fishnamelist);

module.exports = router;
