const config = require("./../Other/config.js");

module.exports = {
  name: "clear",
  aliases: config.aliases.aliasesclear,
  cooldown: config.cooldown.cooldownclear,
  permissions: config.permissions.permissionclear,
  description: "Bulk delete messages.",
  async execute(message, args, cmd, client, Discord) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`)
      const max = config.commandclear.commandclearmax;
      const min = config.commandclear.commandclearmin;

      if (!args[0])
        return message.channel.send(config.commandclear.commandclearmissing);
      if (isNaN(args[0])) return message.channel.send(config.basemessages.messagesrealnumber);

      if (args[0] > max)
        return message.channel.send(
          `You cannot clear more than \`${max}\` messages in one command.`
        );
      if (args[0] < min) return message.channel.send(config.basemessages.messagesgreaterone);

      await message.channel.messages
        .fetch({ limit: args[0] })
        .then((messages) => {
          message.channel.bulkDelete(messages);
        });
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC:`)
    }
  },
};
