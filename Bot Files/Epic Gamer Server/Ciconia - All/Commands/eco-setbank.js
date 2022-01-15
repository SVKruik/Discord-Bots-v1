const profileModel = require("../models/profileSchema");
module.exports = {
  name: "setbank",
  aliases: [],
  cooldown: process.env.ASADMIN,
  permissions: ["ADMINISTRATOR"],
  description: "Reset the balance of a member.",
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
            bank: amount,
          },
        }
      );

      return message.channel.send(
        `${message.author.username}, the targeted member's bank worth is now \`${amount}\`.`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
