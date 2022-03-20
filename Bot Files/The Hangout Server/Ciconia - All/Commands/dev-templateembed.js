// Standaard code voor een command met embed.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "templatecommand",
  aliases: config.aliases.aliasestemplateembed,
  cooldown: config.cooldown.cooldowntemplateembed,
  permissions: config.permissions.permissiontemplatecommand,
  description: "Embed template for devs.",
  execute(message, args, cmd, client, Discord) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
      const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
        .setColor(config.base.basecolor)
        .setTitle(config.embeds.titleembedtemplate)
        .setImage(config.embed.embedimage)
        .setDescription(config.embeds.descriptionembedtemplate)
        .addFields(
          {
            name: config.embeds.nameembedtemplate1,
            value: config.embeds.valueembedtemplate1,
          },
          {
            name: config.embeds.nameembedtemplate2,
            value: config.embeds.valueembedtemplate2,
          }
        )
        .setFooter(config.embed.embedfooter);

      const flagmessage = newEmbed // Flag Systeem
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
          message.channel.send(`@everyone`)
          message.channel.send(newEmbed)
        } else {
          message.channel.send(`@everyone`)
          message.channel.send(newEmbed)
        }
      } else if (args[1] === "everyone") {
        if (args[0] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@everyone`)
          message.channel.send(newEmbed)
        } else {
          message.channel.send(`@everyone`)
          message.channel.send(newEmbed)
        }
      } else if (args[2] === "everyone") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }


      if (args[0] === "here") {
        if (args[1] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[1] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@here`)
          message.channel.send(newEmbed)
        } else {
          message.channel.send(`@here`)
          message.channel.send(newEmbed)
        }
      } else if (args[1] === "here") {
        if (args[0] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@here`)
          message.channel.send(newEmbed)
        } else {
          message.channel.send(`@here`)
          message.channel.send(newEmbed)
        }
      } else if (args[2] === "here") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err15}\`.`)
    }
  },
};
