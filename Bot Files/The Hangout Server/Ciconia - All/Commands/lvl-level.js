const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "level",
  aliases: config.aliases.aliaseslevel,
  cooldown: config.cooldown.cooldownlevel,
  permissions: config.permissions.permissionlevel,
  description: "Displays your current server level.",
  async execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send({ content: 
      `${message.author.username}, this is your Server Level: \`${profileData.level}\`.`
    });
  },
};
