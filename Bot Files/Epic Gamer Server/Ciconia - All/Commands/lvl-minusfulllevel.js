const profileModel = require("../models/profileSchema");
module.exports = {
  name: "minuslevelandexperience",
  aliases: [
    "minuslvlxp",
    "minusxplvl",
    "minusexplvl",
    "minuslvlexp",
    "minlvlxp",
    "minxplvl",
    "minexplvl",
    "minlvlexp",
  ],
  cooldown: process.env.ASADMIN,
  permissions: ["ADMINISTRATOR"],
  description: "Decrease the experience and level.",
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
            experience: -amount,
            level: -amount,
          },
        }
      );

      return message.channel.send(
        `${message.author.username}, the targeted member has lost \`${amount}\` amount of experience and levels.`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
