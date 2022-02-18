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
    } else if (args[0] === "everyone") {
      message.channel.send(`@everyone, ${config.commandcommandtemplate.commandcommandtemplate}`)
    } else if (args[0] === "here") {
      message.channel.send(`@here, ${config.commandcommandtemplate.commandcommandtemplate}`)
    } else {
      message.channel.send(config.commandcommandtemplate.commandcommandtemplate);
    }

    const flags = ["here", "everyone", "delete"];
    if (args[0] === "everyone") {
      message.channel.send("@everyone")
    } else if (args[0] === "here") {
      message.channel.send("@here")
    } else if (args[0] === "delete" || args[0] === "del") {
      message.channel.send("delete")
    }

    if (args[0] === "everyone") {
      if (args[1] === "here") {
        return message.channel.send("You cannot tag both everyone and here.")
      }
    } else if (args[0] === "here") {
      if (args[1] === "everyone") {
        return message.channel.send("You cannot tag both everyone and here.")
      }
    }
  },
};
