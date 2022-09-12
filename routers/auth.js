const express = require("express");
const { register, login, getUser, logout, imageUpload } = require("../controllers/auth");
const { getAccessToRoute } = require("../middewares/authorization/auth");
const profileImageUpload = require("../middewares/libraries/profileImageUpload");

// api/auth/register

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", getAccessToRoute, getUser);
router.get("/logout", getAccessToRoute, logout);
router.post("/upload", [getAccessToRoute, profileImageUpload.single("profile_image")], imageUpload)

module.exports = router;
