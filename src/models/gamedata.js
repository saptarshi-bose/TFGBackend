const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gameDataSchema = new Schema(
  {
    userId: { type: Number },
    latestScore: { type: Number },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("gameData", gameDataSchema, "gameDatas");
