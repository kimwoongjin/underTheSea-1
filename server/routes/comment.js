const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/:tip_id", controllers.addcomment);
router.delete("/:comment_id", controllers.deletecommnet);
<<<<<<< HEAD
router.get("/:tip_id", controllers.tipscomment);
=======
router.get("/:tip_id", controllers.commentinfo);
>>>>>>> d300b7109d4fef89982a88848a94ea6bc6f5ac09

module.exports = router;
