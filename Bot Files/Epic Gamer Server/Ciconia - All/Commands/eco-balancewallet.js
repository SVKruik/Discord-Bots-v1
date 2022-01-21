const profileModel = require("../models/profileSchema");

module.exports = {
  name: "balancewallet",
  aliases: ["balwallet", "balwal"],
  cooldown: process.env.ASSOFT,
  permissions: ["SEND_MESSAGES"],
  description: "Display your wallet balance.",
  async execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send(
      `${message.author.username}, this is your current wallet balance : \`${profileData.coins}\`.`
    );
  },
};
