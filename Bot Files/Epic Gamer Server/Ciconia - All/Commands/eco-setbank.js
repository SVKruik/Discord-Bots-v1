const profileModel = require("../Models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "setbank",
  aliases: config.aliases.aliasessetbank,
  cooldown: config.cooldown.cooldownsetbank,
  permissions: config.permissions.permissionsetbank,
  description: "Reset the balance of a member.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send(config.basemessages.messagesmembermention);
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(config.basemessages.messagesfinderror);

    if (amount < 0) return message.channel.send(config.basemessages.messagesgreaternegaone);

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
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
