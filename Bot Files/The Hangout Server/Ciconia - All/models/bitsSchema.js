const config = require("../Other/config.js");
const mongoose = require("mongoose");

const bitsSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: false },
  name: { type: String },
  tag: { type: Number },

  bitsdiamond: { type: Number, default: 0 },
  bitsplatinum: { type: Number, default: 0 },
  bitsgold: { type: Number, default: 0 },
  bitssilver: { type: Number, default: 0 },
  bitsbronze: { type: Number, default: 0 },
  bitsiron: { type: Number, default: 0 },
});
mongoose.pluralize(null);

const model = mongoose.model("Bits", bitsSchema);

module.exports = model;