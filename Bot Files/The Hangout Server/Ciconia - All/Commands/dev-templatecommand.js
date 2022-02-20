const config = require("../Other/config.js");

module.exports = {
  name: "commandtemplate",
  aliases: config.aliases.aliasestemplatecommand,
  cooldown: config.cooldown.cooldowntemplatecommand,
  permissions: config.permissions.permissiontemplatecommand,
  description: "Command template for devs.",
  async execute(message, args, cmd, client, Discord) {
    const commandmessage1 = config.commandcommandtemplate.commandcommandtemplate

    // Flag Checking
    const flags = ["everyone", "here", "delete"];

    if (!args[0]) {
      message.channel.send(commandmessage1)
    }

    if (args[2] === "everyone" || "here") {
      return message.channel.send(`You cannot use group tags as your third argument. Please use argument 1 or 2.`)
    } else {

      // Flag 1: Everyone
      if (args[0] === "everyone") {
        if (args[1] === "here") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${commandmessage1}`)
        } else {
          message.channel.send(`@everyone ${commandmessage1}`)
        }
      } else if (args[1] === "everyone") {
        if (args[0] === "here") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@everyone ${commandmessage1}`)
        } else {
          message.channel.send(`@everyone ${commandmessage1}`)
        }
      }

      // Flag 2: Here
      if (args[0] === "here") {
        if (args[1] === "everyone") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else if (args[1] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@here ${commandmessage1}`)
        } else {
          message.channel.send(`@here ${commandmessage1}`)
        }
      } else if (args[1] === "here") {
        if (args[0] === "everyone") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@here ${commandmessage1}`)
        } else {
          message.channel.send(`@here ${commandmessage1}`)
        }
      }
    }
  },
};
