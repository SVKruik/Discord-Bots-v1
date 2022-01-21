const profileModel = require("../models/profileSchema");

module.exports = {
  name: "withdraw",
  aliases: ["with", "wit"],
  cooldown: process.env.ASMID,
  permissions: ["SEND_MESSAGES"],
  description: "Bank to Wallet",
  async execute(message, args, cmd, client, discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount < 0)
      return message.channel.send(process.env.MSGGREATERONE);

    try {
      if (amount > profileData.bank)
        return message.channel.send(process.env.MSGSHORT);

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

      return message.channel.send(
        `You withdrew \`${amount}\` amount of coins into your wallet.`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
