const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "setwalletandbank",
  aliases: config.aliases.aliasessetfulleco,
  cooldown: config.cooldown.cooldownsetfulleco,
  permissions: config.permissions.permissionsetfulleco,
  description: "Reset the balance of both accounts of a member.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (args[2] === "delete") {
      message.delete();
    } else if (args[2] === "del" || args[2] === "d") {
      message.delete();
    }

   if (!args[0]) {
      return message.channel.send(config.basemessages.messagesmembermention)
    };
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(config.basemessages.messagesfinderror);

    if (amount < 0) return message.channel.send(config.basemessages.messagesgreaternegaone);

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $set: {
            coins: amount,
            bank: amount,
          },
        }
      );

      return message.channel.send(
        `${message.author.username}, the targeted member's balance is now \`${amount}\`. This applies to both accounts.`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
