const mongoose = require("mongoose");
const config = require("../Other/config.js")

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  serverID: { type: String, require: true },
  name: { type: String},
  coins: { type: Number, default: config.base.basewalletdefault},
  bank: { type: Number, default: config.base.basebankdefault},
  level: { type: Number, default: config.base.baseleveldefault},
  experience: { type: Number, default: config.base.baseexperiencedefault},
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;