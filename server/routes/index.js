const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");
const containerRouter = require("./container");
const fishRouter = require("./fish");
const tipRouter = require("./tip");
const userRouter = require("./user");
const commentRouter = require("./comment");

router.use("/admin", adminRouter);
router.use("/container", containerRouter);
router.use("/fish", fishRouter);
router.use("/tip", tipRouter);
router.use("/user", userRouter);
router.use("/comment", commentRouter);

module.exports = router;
