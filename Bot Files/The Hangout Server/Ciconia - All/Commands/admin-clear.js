const config = require("./../Other/config.js");

module.exports = {
  name: "clear",
  aliases: config.aliases.aliasesclear,
  cooldown: config.cooldown.cooldownclear,
  permissions: config.permissions.permissionclear,
  description: "Bulk delete messages.",
  async execute(message, args, cmd, client, Discord) {
    const max = config.commandclear.commandclearmax;
    const min = config.commandclear.commandclearmin;

    if (!args[0])
      return message.channel.send(process.env.MSGCLEARAMOUNTMISSING);
    if (isNaN(args[0])) return message.channel.send(config.basemessages.messagesrealnumber);

    if (args[0] > max)
      return message.channel.send(
        `You cannot clear more than \`${max}\` messages in one command.`
      );
    if (args[0] < min) return message.channel.send(config.basemessages.messagesgreaterone);

    message.delete();
    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  },
};
