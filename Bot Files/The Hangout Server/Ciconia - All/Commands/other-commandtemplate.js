const config = require("./../Other/config.js");

module.exports = {
  name: "commandtemplate",
  aliases: config.aliases.aliasescommandtemplate,
  cooldown: config.cooldown.cooldowncommandtemplate,
  permissions: config.permissions.permissioncommandtemplate,
  description: "Command template for devs.",
  execute(message, args, cmd, client, Discord) {
    if (args[0] === "delete") {
      message.delete();
  } else if (args[0] === "del" || args[0] === "d") {
      message.delete();
  }

    message.channel.send(config.commandcommandtemplate.commandcommandtemplate);
  },
};
