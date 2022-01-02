const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/fish", controllers.addfishinfo);
router.patch("/fish/:fish_name", controllers.editfishinfo);
router.delete("/fish/:fish_name", controllers.deletefishinfo);

module.exports = router;
