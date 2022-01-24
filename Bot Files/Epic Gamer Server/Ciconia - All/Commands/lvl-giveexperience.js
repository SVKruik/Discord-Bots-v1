const profileModel = require("../models/profileSchema");
const config = require('./../Other/config.js');

module.exports = {
  name: "giveexperience",
  aliases: config.aliases.aliasesgiveexperience,
  cooldown: config.cooldown.cooldowngiveexperience,
  permissions: ["ADMINISTRATOR"],
  description: "Give a player extra levels.",
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
            experience: amount,
          },
        }
      );

      return message.channel.send(
        `${message.author.username}, the targeted member has been given \`${amount}\` amount of experience.`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
