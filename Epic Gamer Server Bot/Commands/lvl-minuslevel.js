const profileModel = require("../models/profileSchema");
module.exports = {
  name: "minuslevel",
  aliases: [],
  cooldown: process.env.ASADMIN,
  permissions: ["ADMINISTRATOR"],
  description: "Current - amount (level).",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send("You need to mention a player to reduce their level.");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user is not in this Discord server.");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("The reduce amount has to be a whole number, nor can it be negative. The system makes it negative for you.");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user does not have an account yet.`);
      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            level: -amount,
          },
        }
      );

      return message.channel.send(`${message.author.username}, the targeted member has lost \`${amount}\` amount of levels.`);
    } catch (err) {
      console.log(err);
    }
  },
};