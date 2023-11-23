const express = require("express");
const router = express.Router();
const userctrl = require("../controller/user.controller");
router.get("/leadStatusCount", userctrl.createUser);
module.exports = router;
