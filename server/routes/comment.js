const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/:tip_id", controllers.addcomment);
router.delete("/:comment_id", controllers.deletecommnet);

module.exports = router;
