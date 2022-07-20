const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "dailyreward",
  aliases: config.aliases.aliasesdailyreward,
  cooldown: config.cooldown.cooldowndailyreward,
  permissions: config.permissions.permissiondailyreward,
  description: "Random amount of coins, as a daily reward.",
  async execute(message, args, cmd, client, Discord, profileData) {
  },
};
