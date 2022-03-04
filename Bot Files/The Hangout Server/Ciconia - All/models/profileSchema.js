const config = require("../Other/config.js");
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String },
  name: { type: String },
  avatar: { type: String },
  banner: { type: String },
  bot: { type: Boolean },
  tag: { type: Number },
  uni: { type: Number, unique: true },
});
mongoose.pluralize(null);

const model = mongoose.model("Profile", profileSchema);

module.exports = model;