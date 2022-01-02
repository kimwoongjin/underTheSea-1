const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.get("/", controllers.alltips);
router.post("/", controllers.addtip);
router.patch("/:tip_id", controllers.edittip);
router.delete("/:tip_id", controllers.deletetip);
router.post("/:tip_id", controllers.addcomment);
router.delete("/:comment_id", controllers.deletecommnet);

module.exports = router;
