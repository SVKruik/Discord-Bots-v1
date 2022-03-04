const config = require("../Other/config.js");
const mongoose = require("mongoose");

const economySchema = new mongoose.Schema({
  userID: { type: String },
  name: { type: String },
  tag: { type: Number },
  uni: { type: Number, unique: true },

  wallet: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
});
mongoose.pluralize(null);

const model = mongoose.model("Economy", economySchema);

module.exports = model;