const express = require("express");
const {
  signup,
  login,
  verifyToken,
  getUser,
  refreshToken,
  logout,
  createPosts,
  getPosts,
  postScore,
} = require("../controller/user-controller");

const router = express.Router();
router.post("/createPosts",createPosts)
router.post("/postScore",postScore)
router.get("/getPosts",getPosts)
router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", verifyToken, logout);
module.exports = router;