const express = require("express");
const { register, login, getUser, logout } = require("../controllers/auth");
const { getAccessToRoute } = require("../middewares/authorization/auth");

// api/auth/register

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", getAccessToRoute, getUser);
router.get("/logout", getAccessToRoute, logout);

module.exports = router;
