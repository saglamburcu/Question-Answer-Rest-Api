const express = require("express");
const { register, login, getUser } = require("../controllers/auth");
const { getAccessToRoute } = require("../middewares/authorization/auth");

// api/auth/register

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", getAccessToRoute, getUser);

module.exports = router;
