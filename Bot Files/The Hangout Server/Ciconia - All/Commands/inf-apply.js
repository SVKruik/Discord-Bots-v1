const config = require("../Other/config.js");

module.exports = {
  name: "apply",
  aliases: config.aliases.aliasesapply,
  cooldown: config.cooldown.cooldownapply,
  permissions: config.permissions.permissionapply,
  description:
    "Sends you the link where you can apply to one of our roles/ranks.",
    async execute(message, args, cmd, client, Discord) {
    const command =
      client.commands.get(cmd) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
    console.log(`${message.author.username} used this command: || ${command.name} ||`)
    message.channel.send(config.commandapply);
  },
};
