const express = require("express");
const auth = require("./auth");
const question = require("./question");

// /api
const router = express.Router();

router.use("/questions", question);
router.use("/auth", auth)

module.exports = router;