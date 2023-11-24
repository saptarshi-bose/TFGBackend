const gamedata = require("../models/gamedata");
// creates gamedata for a user
module.exports.createGameData = async (req, res) => {
  try {
    const createdData = await gamedata.create(req.body);
    return res.status(200).json(createdData);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Sorry unable to create game data at the moment!" });
  }
};
//fetch gamedata for a user
module.exports.getGameData = async (req, res) => {
  try {
    const userId = req.params["id"];
    const userGameData = await gamedata.find({ userId: userId });
    return res.status(200).json(userGameData);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Sorry unable to get game data at the moment!" });
  }
};
//update gamedata for a user
module.exports.updateGameData = async (req, res) => {
  try {
    const userId = req.params["id"];
    console.log(req.body.latestScore);
    await gamedata.updateOne(
      { userId: userId },
      { $set: { latestScore: req.body.latestScore } }
    );
    return res.status(200).json({ message: "Updated sucessfully" });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Sorry unable to update game data at the moment!" });
  }
};
module.exports.deleteGameData = async (req, res) => {
  try {
    const userId = req.params["id"];
    console.log(req.body.latestScore);
    await gamedata.deleteOne({ userId: userId });
    return res.status(200).json({ message: "deleted sucessfully" });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Sorry unable to delete game data at the moment!" });
  }
};
