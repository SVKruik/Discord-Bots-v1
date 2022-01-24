const profileModel = require("../models/profileSchema");
const config = require('./../Other/config.js');

module.exports = {
  name: "setwalletandbank",
  aliases: config.aliases.aliasessetfulleco,
  cooldown: process.env.ASADMIN,
  permissions: ["ADMINISTRATOR"],
  description: "Reset the balance of both accounts of a member.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send(process.env.MSGMEMBERMENTION);
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(process.env.MSGFINDERR);

    if (amount < 0) return message.channel.send(process.env.MSGGREATERNEGAONE);

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(process.env.MSGNOACCOUNT);
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
