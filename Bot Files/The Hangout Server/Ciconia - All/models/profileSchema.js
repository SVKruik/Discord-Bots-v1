const config = require("../Other/config.js");
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String },
  name: { type: String },
  tag: { type: Number },
  uni: { type: Number, unique: true },
  bot: { type: Boolean },

  scrapexotic: { type: Number, default: 0 },
  scraplegendary: { type: Number, default: 0 },
  scrapepic: { type: Number, default: 0 },
  scraprare: { type: Number, default: 0 },
  scrapuncommon: { type: Number, default: 0 },
  scrapcommon: { type: Number, default: 0 },

  music1: { type: String, default: "https://www.youtube.com/" },
  music2: { type: String, default: "https://www.youtube.com/" },
  music3: { type: String, default: "https://www.youtube.com/" },
  music4: { type: String, default: "https://www.youtube.com/" },
  music5: { type: String, default: "https://www.youtube.com/" },
  music6: { type: String, default: "https://www.youtube.com/" },

  level: { type: Number, default: 0 },
  experience: { type: Number, default: 0 },

  wallet: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },

  boxesultra: { type: Number, default: 0 },
  boxessuper: { type: Number, default: 0 },
  boxesnormal: { type: Number, default: 0 },

  shardsdiamond: { type: Number, default: 0 },
  shardsplatinum: { type: Number, default: 0 },
  shardsgold: { type: Number, default: 0 },
  shardssilver: { type: Number, default: 0 },
  shardsbronze: { type: Number, default: 0 },
  shardsiron: { type: Number, default: 0 }
});
mongoose.pluralize(null);

const model = mongoose.model("Profile", profileSchema);

module.exports = model;