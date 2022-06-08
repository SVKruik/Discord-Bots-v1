// Haal materialen weg.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "tradingminus",
  aliases: config.aliases.aliasestradingminus,
  cooldown: config.cooldown.cooldowntradingminus,
  permissions: config.permissions.permissiontradingminus,
  description: "Decrease the amount of materials.",
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
            $inc: {
              [material]: -amount,
            },
          }
        );

        message.channel.send(`The targeted member has lost \`${amount}\` amount of\`${material}\`.`)
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
