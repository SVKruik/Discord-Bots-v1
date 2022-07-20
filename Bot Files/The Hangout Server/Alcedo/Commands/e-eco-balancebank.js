const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "balancebank",
  aliases: config.aliases.aliasesbalancebank,
  cooldown: config.cooldown.cooldownbalancebank,
  permissions: config.permissions.permissionbalancebank,
  description: "Display your bank account balance.",
  async execute(message, args, cmd, client, Discord, profileData) {
  },
};
