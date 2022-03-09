const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "dailyreward",
  aliases: config.aliases.aliasesdailyreward,
  cooldown: config.cooldown.cooldowndailyreward,
  permissions: config.permissions.permissiondailyreward,
  description: "Random amount of coins, as a daily reward.",
  async execute(message, args, cmd, client, Discord, profileData) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.


      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const response = await profileModel.findOneAndUpdate(
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
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
    }
  },
};
