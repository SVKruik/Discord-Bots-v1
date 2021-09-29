const profileModel = require("../models/profileSchema");
module.exports = {
  name: "dailyreward",
  cooldown: 86400,
  permissions: ["SEND_MESSAGES"],
  description: "Receive random number of coins.",
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