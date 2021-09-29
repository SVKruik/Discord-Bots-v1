const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  serverID: { type: String, require: true },
  name: { type: String},
  coins: { type: Number, default: process.env.WALLETDEFAULT},
  bank: { type: Number, default: process.env.BANKDEFAULT},
  level: { type: Number, default: process.env.LVLDEFAULT},
  experience: { type: Number, default: process.env.EXPDEFAULT},
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;