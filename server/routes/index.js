const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");
const containerRouter = require("./container");
const fishRouter = require("./fish");
const tipRouter = require("./tip");
const userRouter = require("./user");

router.use("/admin", adminRouter);
router.use("/container", containerRouter);
router.use("/fish", fishRouter);
router.use("/tip", tipRouter);
router.use("/user", userRouter);

module.exports = router;
