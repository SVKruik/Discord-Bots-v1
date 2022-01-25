const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "minusbank",
  aliases: config.aliases.aliasesminusbank,
  cooldown: config.cooldown.cooldownminusbank,
  permissions: config.permissions.permissionminusbank,
  description: "Current - amount (bank).",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send(config.basemessages.messagesmembermention);
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(config.basemessages.messagesfinderror);

    if (amount % 1 != 0 || amount < 0)
      return message.channel.send(process.env.MSGGREATERONE);

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            bank: -amount,
          },
        }
      );

      return message.channel.send(
        `${message.author.username}, the targeted member has lost \`${amount}\` amount of coins (bank).`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
