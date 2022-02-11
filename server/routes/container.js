const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/add", controllers.addcon);
router.get("/:container_id/:month", controllers.coninfo);
// 여기수정
router.get("/container/:container_id/:month", controllers.coninfo);
router.delete("/info/:container_id/:month", controllers.coninfo);
router.patch("/info/:container_id/:month", controllers.coninfo);
router.post("/info/:container_id/:month", controllers.coninfo);
router.patch("/:container_id", controllers.editcon);
router.delete("/:container_id", controllers.deletecon);
router.patch("/level/:container_id", controllers.level);
router.post("/:container_id/fish", controllers.addfish);
router.delete("/:container_id/fish", controllers.deletefish);
// 여기수정
router.post("/container/:container_id/feed", controllers.feed);
router.post("/:container_id/ex_water", controllers.water);
router.get("/all", controllers.allcontainer);

module.exports = router;
