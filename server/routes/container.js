const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/add", controllers.addcon);
router.get("/:container_id", controllers.coninfo);
router.patch("/:container_id", controllers.editcon);
router.delete("/:container_id", controllers.deletecon);
router.patch("/:container_id/level", controllers.level);
router.post("/:container_id/fish", controllers.addfish);
router.post("/:container_id/feed", controllers.feed);
router.post("/:container_id/ex_water", controllers.water);

module.exports = router;
