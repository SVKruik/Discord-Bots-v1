const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "flipacoin",
  aliases: config.aliases.aliasesflipacoinen,
  cooldown: config.cooldown.cooldownflipacoinen,
  permissions: config.permissions.permissionflipacoinen,
  description: "Flip a coin!",
  async execute(message, args, cmd, client, Discord) {
  },
};
