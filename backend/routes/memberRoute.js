const express = require("express");
const {
  addMember,
  updateMember,
  getMembers,
  deleteMember,
  getMember,
} = require("../controllers/memberController");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");


router.post("/add",protect, addMember);
router.patch("/updatemember", protect, updateMember);
router.get("/", protect, getMembers);
router.get("/:id",protect, getMember);
router.delete("/:id", protect, deleteMember);

module.exports = router;
