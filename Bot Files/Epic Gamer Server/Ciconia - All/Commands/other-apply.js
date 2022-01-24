const config = require('./../Other/config.js');

module.exports = {
  name: "apply",
  aliases: config.aliases.aliasesapply,
  cooldown: process.env.ASSOFT,
  permissions: ["SEND_MESSAGES"],
  description:
    "Sends you the link where you can apply to one of our roles/ranks.",
  async execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send(process.env.MSGAPPLY);
  },
};
