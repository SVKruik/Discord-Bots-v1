const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "setlevel",
  aliases: config.aliases.aliasessetlevel,
  cooldown: config.cooldown.cooldownsetlevel,
  permissions: config.permissions.permissionsetlevel,
  description: "Reset the level of a member.",
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
            level: amount,
          },
        }
      );

      return message.channel.send(
        `${message.author.username}, the targeted member's level is now \`${amount}\`.`
      );
    } catch (err) {
      console.log(err);
    }
  },
};