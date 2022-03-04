const config = require("../Other/config.js");
const mongoose = require("mongoose");

const scrapSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: false },
  name: { type: String },
  tag: { type: Number },

  scrapexotic: { type: Number, default: 0 },
  scraplegendary: { type: Number, default: 0 },
  scrapepic: { type: Number, default: 0 },
  scraprare: { type: Number, default: 0 },
  scrapuncommon: { type: Number, default: 0 },
  scrapcommon: { type: Number, default: 0 },
});
mongoose.pluralize(null);

const model = mongoose.model("Scrap", scrapSchema);

module.exports = model;