const config = require("../Other/config.js");
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  serverID: { type: String, require: true },
  name: { type: String },
  tag: { type: Number, unique: true },
  wallet: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
  level: { type: Number, default: 0 },
  experience: { type: Number, default: 0 },
  music1: { type: String, default: "https://www.youtube.com/" },
  music2: { type: String, default: "https://www.youtube.com/" },
  music3: { type: String, default: "https://www.youtube.com/" },
  music4: { type: String, default: "https://www.youtube.com/" },
  music5: { type: String, default: "https://www.youtube.com/" },
  music6: { type: String, default: "https://www.youtube.com/" },
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;