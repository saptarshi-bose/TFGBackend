const express = require("express");
const router = express.Router();
const userctrl = require("../controller/user.controller");
const jwtvalidator = require("../common/jwtValidator");
const gameDataCtrl = require("../controller/gamedata.controller");

router.post("/user", userctrl.createUser);
router.post("/user/login", userctrl.login);
router.get(
  "/gamedata/user/:id",
  jwtvalidator.validateToken,
  gameDataCtrl.getGameData
);
router.post(
  "/gamedata/user",
  jwtvalidator.validateToken,
  gameDataCtrl.createGameData
);
router.patch(
  "/gamedata/user/:id",
  jwtvalidator.validateToken,
  gameDataCtrl.updateGameData
);
router.delete(
  "/gamedata/user/:id",
  jwtvalidator.validateToken,
  gameDataCtrl.deleteGameData
);
module.exports = router;
