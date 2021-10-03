const profileModel = require("../models/profileSchema");
module.exports = {
  name: "dailyreward",
  aliases: ['dlyrwd', 'dr'],
  cooldown: process.env.DAILY,
  permissions: ["SEND_MESSAGES"],
  description: "Random amount of coins, as a daily reward.",
  async execute(message, args, cmd, client, discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
      }
    );
    return message.channel.send(`${message.author.username}, you have collected your daily reward and received \`${randomNumber}\` coins.`);
  },
};