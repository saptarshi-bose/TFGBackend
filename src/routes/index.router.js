const express = require("express");
const router = express.Router();
const userctrl = require("../controller/user.controller");
router.post("/user", userctrl.createUser);
module.exports = router;
