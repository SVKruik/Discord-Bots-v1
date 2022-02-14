const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "giveexperience",
  aliases: config.aliases.aliasesgiveexperience,
  cooldown: config.cooldown.cooldowngiveexperience,
  permissions: config.permissions.permissiongiveexperience,
  description: "Give a player extra levels.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send(config.basemessages.messagesmembermention);
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(config.basemessages.messagesfinderror);

    if (amount <= 0)
      return message.channel.send(config.basemessages.messagesgreaterone);

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
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
