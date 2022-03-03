const config = require("../Other/config.js");
const mongoose = require("mongoose");

const scrapSchema = new mongoose.Schema({
  userID: { type: String, require: true },
  name: { type: String },
  tag: { type: Number, unique: true },

  scrapexotic: { type: Number, default: 0},
  scraplegendary: { type: Number, default: 0},
  scrapepic: { type: Number, default: 0},
  scraprare: { type: Number, default: 0},
  scrapuncommon: { type: Number, default: 0},
  scrapcommon: { type: Number, default: 0},
});

const model = mongoose.model("Scrap", scrapSchema);

module.exports = model;