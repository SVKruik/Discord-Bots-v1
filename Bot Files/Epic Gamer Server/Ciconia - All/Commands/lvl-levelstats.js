const profileModel = require("../models/profileSchema");

module.exports = {
  name: "levelstatistics",
  aliases: ["levelstats", "levelstat", "lvlstat", "lvlstats"],
  cooldown: process.env.ASSOFT,
  permissions: ["SEND_MESSAGES"],
  description: "Displays your current server level and experience.",
  async execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send(
      `${message.author.username}, your current Server Level is \`${profileData.level}\` and your amount of Server Experience is \`${profileData.experience}\`.`
    );
  },
};
