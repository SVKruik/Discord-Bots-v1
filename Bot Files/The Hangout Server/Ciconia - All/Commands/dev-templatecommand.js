const config = require("../Other/config.js");

module.exports = {
  name: "commandtemplate",
  aliases: config.aliases.aliasestemplatecommand,
  cooldown: config.cooldown.cooldowntemplatecommand,
  permissions: config.permissions.permissiontemplatecommand,
  description: "Command template for devs.",
    async execute(message, args, cmd, client, Discord) {
    const command =
      client.commands.get(cmd) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
    console.log(`${message.author.username} used this command: || ${command.name} ||`)

    
    const flagmessage = config.commandcommandtemplate.commandcommandtemplate
    const flags = ["everyone", "here", "delete"];
    
    if (!args[0]) {
      message.channel.send(flagmessage)
    }
    
    if (args[0] === "delete") {
      if (!args[1]) {
        if (!args[2]) {
          message.delete();
          message.channel.send(flagmessage)
        }
      }
    } else if (args[1] === "delete") {
      if (!args[0]) {
        if (!args[2]) {
          message.delete();
          message.channel.send(flagmessage)
        }
      }
    } else if (args[2] === "delete") {
      if (!args[0]) {
        if (!args[1]) {
          message.delete();
          message.channel.send(flagmessage)
        }
      }
    }
    
    
    if (args[0] === "everyone") {
      if (args[1] === "here") {
        return message.channel.send(`You cannot use both group tags at the same time.`)
      } else if (args[1] || args[2] === "delete") {
        message.delete();
        message.channel.send(`@everyone ${flagmessage}`)
      } else {
        message.channel.send(`@everyone ${flagmessage}`)
      }
    } else if (args[1] === "everyone") {
      if (args[0] === "here") {
        return message.channel.send(`You cannot use both group tags at the same time.`)
      } else if (args[0] || args[2] === "delete") {
        message.delete();
        message.channel.send(`@everyone ${flagmessage}`)
      } else {
        message.channel.send(`@everyone ${flagmessage}`)
      }
    } else if (args[2] === "everyone") {
      return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
    }
    
    
    if (args[0] === "here") {
      if (args[1] === "everyone") {
        return message.channel.send(`You cannot use both group tags at the same time.`)
      } else if (args[1] || args[2] === "delete") {
        message.delete();
        message.channel.send(`@here ${flagmessage}`)
      } else {
        message.channel.send(`@here ${flagmessage}`)
      }
    } else if (args[1] === "here") {
      if (args[0] === "everyone") {
        return message.channel.send(`You cannot use both group tags at the same time.`)
      } else if (args[0] || args[2] === "delete") {
        message.delete();
        message.channel.send(`@here ${flagmessage}`)
      } else {
        message.channel.send(`@here ${flagmessage}`)
      }
    } else if (args[2] === "here") {
      return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
    }
  },
};
