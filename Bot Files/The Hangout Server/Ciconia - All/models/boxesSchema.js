const config = require("../Other/config.js");
const mongoose = require("mongoose");

const boxesSchema = new mongoose.Schema({
  userID: { type: String },
  name: { type: String },
  tag: { type: Number },
  uni: { type: Number, unique: true },

  boxesultra: { type: Number, default: 0 },
  boxessuper: { type: Number, default: 0 },
  boxesnormal: { type: Number, default: 0 },
});
mongoose.pluralize(null);

const model = mongoose.model("Boxes", boxesSchema);

module.exports = model;