const express = require("express");
const {
  addMember,
  updateMember,
  getMembers,
  deleteMember,
  getMember,
  getMemberMessage,
} = require("../controllers/memberController");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

router.post("/add", protect, addMember);
router.patch("/updatemember", protect, updateMember);
router.get("/", protect, getMembers);
router.get("/:id", protect, getMember);
router.delete("/:id", protect, deleteMember);
router.post("/getmembermessage", getMemberMessage);

module.exports = router;
