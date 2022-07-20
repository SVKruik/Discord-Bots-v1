const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "balancewallet",
  aliases: config.aliases.aliasesbalancewallet,
  cooldown: config.cooldown.cooldownbalancewallet,
  permissions: config.permissions.permissionbalancewallet,
  description: "Display your wallet balance.",
  async execute(message, args, cmd, client, Discord, profileData) {
  },
};
