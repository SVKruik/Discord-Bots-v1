const profileModel = require("../models/profileSchema");
const config = require('./../Other/config.js');

module.exports = {
  name: "balancebank",
  aliases: ["balbank"],
  cooldown: process.env.ASSOFT,
  permissions: ["SEND_MESSAGES"],
  description: "Display your bank account balance.",
  async execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send(
      `${message.author.username}, this is your current bank balance : \`${profileData.bank}\`.`
    );
  },
};
