const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "minusbankandwallet",
  aliases: config.aliases.aliasesminusfulleco,
  cooldown: config.cooldown.cooldownminusfulleco,
  permissions: config.permissions.permissionminusfulleco,
  description: "Decrease the balance of both accounts.",
  async execute(message, args, cmd, client, discord, profileData) {
   if (!args[0]) {
      return message.channel.send(config.basemessages.messagesmembermention)
    };
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(config.basemessages.messagesfinderror);

    if (amount <= 0)
      return message.channel.send(config.basemessages.messagesgreaterone);

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: -amount,
          },
        }
      );

      return message.channel.send(
        `${message.author.username}, the targeted member has lost \`${amount}\` amount of coins in both of their accounts.`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
