const profileModel = require("../Models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "balancebank",
  aliases: config.aliases.aliasesbalancebank,
  cooldown: config.cooldown.cooldownbalancebank,
  permissions: config.permissions.permissionbalancebank,
  description: "Display your bank account balance.",
  async execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send(
      `${message.author.username}, this is your current bank balance : \`${profileData.bank}\`.`
    );
  },
};
