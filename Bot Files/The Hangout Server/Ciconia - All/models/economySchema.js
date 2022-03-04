const config = require("../Other/config.js");
const mongoose = require("mongoose");

const ecoSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: false },
  name: { type: String },
  tag: { type: Number },

  wallet: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
});
mongoose.pluralize(null);

const model = mongoose.model("Economy", ecoSchema);

module.exports = model;