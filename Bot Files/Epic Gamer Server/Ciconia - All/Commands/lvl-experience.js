const profileModel = require("../Models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "experience",
  aliases: config.aliases.aliasesexperience,
  cooldown: config.cooldown.cooldownexperience,
  permissions: config.permissions.permissionexperience,
  description: "Displays your current server experience.",
  async execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send(
      `${message.author.username}, this is the amount of Experience you have: \`${profileData.experience}\`.`
    );
  },
};
