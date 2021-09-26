const profileModel = require("../models/profileSchema");
module.exports = {
  name: "withdraw",
  aliases: ['with', 'wit', 'withdrawn', 'withdrew', 'bankwallet', 'bankwal'],
  cooldown: process.env.ASMID,
  permissions: ["SEND_MESSAGES"],
  description: "Bank to Wallet",
  async execute(message, args, cmd, client, discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Amount must be a whole number, and it cannot be negative.");

    try {
      if (amount > profileData.bank) return message.channel.send(`You don't have that amount of coins to withdraw.`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );

      return message.channel.send(`You withdrew \`${amount}\` of coins into your wallet.`);
    } catch (err) {
      console.log(err);
    }
  },
};