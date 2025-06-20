const express = require("express");
const { getUser, updateUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/:id", authMiddleware, getUser);
router.put("/:id", authMiddleware, updateUser);

module.exports = router;
