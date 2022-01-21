const profileModel = require("../models/profileSchema");

module.exports = {
  name: "deposit",
  aliases: ["dep", "depo"],
  cooldown: process.env.ASMID,
  permissions: ["SEND_MESSAGES"],
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
