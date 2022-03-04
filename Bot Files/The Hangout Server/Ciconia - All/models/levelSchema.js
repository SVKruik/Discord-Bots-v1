const config = require("../Other/config.js");
const mongoose = require("mongoose");

const levelSchema = new mongoose.Schema({
  userID: { type: String },
  name: { type: String },
  tag: { type: Number },
  uni: { type: Number, unique: true },

  level: { type: Number, default: 0 },
  experience: { type: Number, default: 0 },
});
mongoose.pluralize(null);

const model = mongoose.model("Level", levelSchema);

module.exports = model;