const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  serverID: { type: String, require: true },
  coins: { type: Number, default: 0 },
  bank: { type: Number },
  level: { type: Number, default: 0},
  name: { type: String, require: true},
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;