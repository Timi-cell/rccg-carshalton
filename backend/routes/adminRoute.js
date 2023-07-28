const express = require("express");
const router = express.Router();
const {
  loginAdmin,
  loginStatus,
  logoutAdmin,
} = require("../controllers/adminController");

router.post("/login", loginAdmin);
router.get("/loggedin", loginStatus);
router.get("/logout", logoutAdmin);

module.exports = router;
