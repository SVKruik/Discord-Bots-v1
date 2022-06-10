// Reset hoeveelheid materialen.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
  name: "tradingset",
  aliases: config.aliases.aliasestradingset,
  cooldown: config.cooldown.cooldowntradingset,
  permissions: config.permissions.permissiontradingset,
  description: "Set the amount of materials.",
  async execute(message, args, cmd, client, Discord, profileData) {
    try {
      if (!args[0]) {
        return message.channel.send(config.basemessages.messagesmembermention)
      };
      const material = args[1];
      const amount = args[2];
      if (!args[1]) {
        return message.channel.send(`You are missing the type of material/item.`)
      }
      if (!args[2]) {
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
            $set: {
              [material]: amount,
            },
          }
        );

        message.channel.send(`The targeted member's amount of \`${material}\` is now \`${amount}\`.`)
      } catch (err) {
        console.log(err);
        message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
    }
  },
};
