const config = require("./../Other/config.js");

module.exports = {
  name: "commandtemplate",
  aliases: config.aliases.aliasescommandtemplate,
  cooldown: config.cooldown.cooldowncommandtemplate,
  permissions: config.permissions.permissioncommandtemplate,
  description: "Command template for devs.",
  execute(message, args, cmd, client, Discord) {
    const commandmessage1 = config.commandcommandtemplate.commandcommandtemplate

    // Flag Checking
    const flags = ["everyone", "here", "delete"];
    if (flags.includes(args[0])) {
      // Flag 1: Everyone
      if (args[0] === "everyone") {
        if (args[1] === "here") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else {
          message.channel.send(`@everyone ${commandmessage1}`)
        }
      } else if (args[1] === "everyone") {
        if (args[0] === "here") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else {
          message.channel.send(`@everyone ${commandmessage1}`)
        }
      } else if (args[2] === "everyone") {
        return message.channel.send(`You cannot use group tags as your third argument. Please use argument 1 or 2.`)
      }

      // Flag 2: Here
      else if (args[0] === "here") {
        if (args[1] === "everyone") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else {
          message.channel.send(`@here ${commandmessage1}`)
        }
      } else if (args[1] === "here") {
        if (args[0] === "everyone") {
          return message.channel.send(`You cannot tag both \`everyone\` and \`here\`.`)
        } else {
          message.channel.send(`@here ${commandmessage1}`)
        }
      } else if (args[2] === "here") {
        return message.channel.send(`You cannot use group tags as your third argument. Please use argument 1 or 2.`)
      }

      // Flag 3: Delete
      else if (args[0] === "delete" || args[0] === "del") {
        message.delete();
        message.channel.send(commandmessage1)
      } else if (args[1] === "delete" || args[0] === "del") {
        message.delete();
        message.channel.send(commandmessage1)
      } else if (args[2] === "delete" || args[0] === "del") {
        message.delete();
        message.channel.send(commandmessage1)
      } else message.channel.send(commandmessage1)
    } else return message.channel.send(`Invalid flag sent.`)
  },
};
