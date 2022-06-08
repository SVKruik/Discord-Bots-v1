// Geef iemand materialen.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "tradinggive",
  aliases: config.aliases.aliasestradinggive,
  cooldown: config.cooldown.cooldowntradinggive,
  permissions: config.permissions.permissiontradinggive,
  description: "Give someone materials.",
  async execute(message, args, cmd, client, Discord, profileData) {
    try {
      if (!args[0]) {
        return message.channel.send(config.basemessages.messagesmembermention)
      };
      const amount = args[1];
      const material = args[2];
      if (!args[1]) {
        return message.channel.send(config.basemessages.messagesamountmissing)
      }
      const target = message.mentions.users.first();
      if (!target) {
        return message.channel.send(config.basemessages.messagesfinderror);
      }
      if (amount <= 0) {
        return message.channel.send(config.basemessages.messagesgreaterone);
      }
      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) {
          return message.channel.send(config.basemessages.messagesaccountmissing);
        }
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              bank: amount,
            },
          }
        );

        message.channel.send(`The targeted member has been given \`${amount}\` amount of \`${material}\`.`)
    }} catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
    }
  },
};
