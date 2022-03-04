const config = require("../Other/config.js");
const mongoose = require("mongoose");

const levelSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: false },
  name: { type: String },
  tag: { type: Number },

  level: { type: Number, default: 0 },
  experience: { type: Number, default: 0 },
});
mongoose.pluralize(null);

const model = mongoose.model("Level", levelSchema);

module.exports = model;