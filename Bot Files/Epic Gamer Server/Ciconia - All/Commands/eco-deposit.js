const profileModel = require("../models/profileSchema");
const config = require('./../Other/config.js');

module.exports = {
  name: "deposit",
  aliases: config.aliases.aliasesdeposit,
  cooldown: config.cooldown.cooldowndeposit,
  permissions: config.permissions.permissiondeposit,
  description: "Deposit coins from your wallet to your bank.",
  async execute(message, args, cmd, client, discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount < 0)
      return message.channel.send(process.env.MSGGREATERONE);
    try {
      if (amount > profileData.coins)
        return message.channel.send(process.env.MSGSHORT);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
      );

      return message.channel.send(
        `You deposited \`${amount}\` of coins into your bank account.`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
