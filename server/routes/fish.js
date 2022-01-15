const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

// router.get("?fish_name", controllers.fishinfo);
router.post("/", controllers.fishinfo);
router.get("/all/:limit", controllers.allfishinfo);

module.exports = router;
