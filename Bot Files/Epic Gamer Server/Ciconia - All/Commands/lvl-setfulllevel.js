const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "setlevelandexperience",
  aliases: config.aliases.aliasessetfulllevel,
  cooldown: config.cooldown.cooldownsetfulllevel,
  permissions: config.permissions.permissionsetfulllevel,
  description: "Reset the level and experience of a member.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send(config.basemessages.messagesmembermention);
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(config.basemessages.messagesfinderror);

    if (amount < 0) return message.channel.send(process.env.MSGGREATERNEGAONE);

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
            level: amount,
          },
        }
      );

      return message.channel.send(
        `${message.author.username}, the targeted member's level and experience is now \`${amount}\`.`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
