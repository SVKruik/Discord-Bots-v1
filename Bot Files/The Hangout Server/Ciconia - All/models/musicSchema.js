const config = require("../Other/config.js");
const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: false },
  name: { type: String },
  tag: { type: Number },

  music1: { type: String, default: "https://www.youtube.com/" },
  music2: { type: String, default: "https://www.youtube.com/" },
  music3: { type: String, default: "https://www.youtube.com/" },
  music4: { type: String, default: "https://www.youtube.com/" },
  music5: { type: String, default: "https://www.youtube.com/" },
  music6: { type: String, default: "https://www.youtube.com/" },
});
mongoose.pluralize(null);

const model = mongoose.model("Music", musicSchema);

module.exports = model;