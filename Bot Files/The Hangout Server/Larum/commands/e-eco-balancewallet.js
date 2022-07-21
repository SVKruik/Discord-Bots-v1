const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "balancewallet",
  aliases: config.aliases.aliasesbalancewallet,
  cooldown: config.cooldown.cooldownbalancewallet,
  permissions: config.permissions.permissionbalancewallet,
  description: "Display your wallet balance.",
  async execute(message, args, cmd, client, Discord, profileData) {
  },
};
