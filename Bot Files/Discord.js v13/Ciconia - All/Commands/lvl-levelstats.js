const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "levelstatistics",
  aliases: config.aliases.aliaseslevelstats,
  cooldown: config.cooldown.cooldownlevelstats,
  permissions: config.permissions.permissionlevelstats,
  description: "Displays your current server level and experience.",
  async execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send({ content: 
      `${message.author.username}, your current Server Level is \`${profileData.level}\` and your amount of Server Experience is \`${profileData.experience}\`.`
    });
  },
};
