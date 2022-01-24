const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "setlevel",
  aliases: config.aliases.aliasessetlevel,
  cooldown: config.cooldown.cooldownsetlevel,
  permissions: config.permissions.permissionsetlevel,
  description: "Reset the level of a member.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send(process.env.MSGMEMBERMENTION);
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(process.env.MSGFINDERR);

    if (amount < -1) return message.channel.send(process.env.MSGGREATERNEGAONE);

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(process.env.MSGNOACCOUNT);
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
