const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "balancewallet",
  aliases: config.aliases.aliasesbalancewallet,
  cooldown: config.cooldown.cooldownbalancewallet,
  permissions: config.permissions.permissionbalancewallet,
  description: "Display your wallet balance.",
  async execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send({ content: 
      `${message.author.username}, this is your current wallet balance : \`${profileData.coins}\`.`
    });
  },
};