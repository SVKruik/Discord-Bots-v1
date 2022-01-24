const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "minuswallet",
  aliases: config.aliases.aliasesminuswallet,
  cooldown: config.cooldown.cooldownminuswallet,
  permissions: config.permissions.permissionminuswallet,
  description: "Decrease the balance of a member.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send(process.env.MSGMEMBERMENTION);
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(process.env.MSGFINDERR);

    if (amount % 1 != 0 || amount < 0)
      return message.channel.send(process.env.MSGGREATERONE);

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(process.env.MSGNOACCOUNT);
      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: -amount,
          },
        }
      );

      return message.channel.send(
        `${message.author.username}, the targeted member has lost \`${amount}\` amount of coins (wallet).`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
