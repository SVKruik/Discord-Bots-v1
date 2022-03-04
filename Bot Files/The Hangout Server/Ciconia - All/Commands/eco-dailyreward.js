const config = require("./../Other/config.js");
const economyModel = require("../models/economySchema");

module.exports = {
  name: "dailyreward",
  aliases: config.aliases.aliasesdailyreward,
  cooldown: config.cooldown.cooldowndailyreward,
  permissions: config.permissions.permissiondailyreward,
  description: "Random amount of coins, as a daily reward.",
  async execute(message, args, cmd, client, discord, economyData) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const response = await economyModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          wallet: randomNumber,
        },
      }
    );
    return message.channel.send(
      `${message.author.username}, you have collected your daily reward and received \`${randomNumber}\` coins. Come back tomorrow for more!`
    );
  },
};
