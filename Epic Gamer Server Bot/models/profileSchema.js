const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  serverID: { type: String, require: true },
  coins: { type: Number, default: 0 },
  coins: { type: Number, default: 0},
  level: { type: Number, default: 0},
  name: { type: String, require: true, unique : false},
});

const model = mongoose.model("users", profileSchema);

module.exports = model;