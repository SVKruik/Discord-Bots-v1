const profileModel = require("../models/profileSchema");
module.exports = {
  name: "givebank",
  permissions: ["ADMINISTRATOR"],
  description: "Give a player an amount of coins.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send("You need to mention a player to give them coins.");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user is not in this Discord server.");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number, nor can it be negative.");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user does not have an account yet.`);
      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            bank: amount,
          },
        }
      );

      return message.channel.send(`${message.author.username}, the targeted member has been given \`${amount}\` amount of coins.`);
    } catch (err) {
      console.log(err);
    }
  },
};