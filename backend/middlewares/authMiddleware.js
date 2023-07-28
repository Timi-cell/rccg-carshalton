const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) => {
  try {
    // Get Token
    const token = req.cookies.token;
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, please login.");
    }

    // Verify Token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      res.status(401);
      throw new Error("Not authorized, please login.");
    }
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, please login.");
  }
});

module.exports = protect;
