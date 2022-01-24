const profileModel = require("../models/profileSchema");
const config = require('./../Other/config.js');

module.exports = {
  name: "balance",
  aliases: config.aliases.aliasesbalance,
  cooldown: config.cooldown.cooldownbalance,
  permissions: ["SEND_MESSAGES"],
  description: "Display both your wallet and bank balance.",
  async execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send(
      `${message.author.username}, your current wallet balance is \`${profileData.coins}\` and your bank account balance is \`${profileData.bank}\`.`
    );
  },
};
