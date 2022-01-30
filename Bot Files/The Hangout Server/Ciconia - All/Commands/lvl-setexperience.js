const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "setexperience",
  aliases: config.aliases.aliasessetexperience,
  cooldown: config.cooldown.cooldownsetexperience,
  permissions: config.permissions.permissionsetexperience,
  description: "Reset the amount of experience of a member.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send(config.basemessages.messagesmembermention);
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
            experience: amount,
          },
        }
      );

      return message.channel.send(
        `${message.author.username}, the targeted member's experience is now \`${amount}\`.`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
