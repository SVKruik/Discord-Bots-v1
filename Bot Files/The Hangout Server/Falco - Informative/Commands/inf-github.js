// Link naar onze GitHub pagina voor informatie.

const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "github",
  aliases: config.aliases.aliasesgithub,
  cooldown: config.cooldown.cooldowngithub,
  permissions: config.permissions.permissiongithub,
  description: "Displays all import links to our GitHub repository.",
  execute(message, args, cmd, client, Discord) {
    try {
      const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
        .setColor(config.base.basecolor)
        .setTitle(config.embeds.titlegithub)
        .setImage(config.embed.embedimage)
        .setDescription(config.embeds.descriptiongithub)
        .addFields(
          {
            name: config.embeds.namegithub1,
            value: config.embeds.valuegithub1,
          },
          {
            name: config.embeds.namegithub2,
            value: config.embeds.valuegithub2,
          },
          {
            name: config.embeds.namegithub3,
            value: config.embeds.valuegithub3,
          },
          {
            name: config.embeds.namegithub4,
            value: config.embeds.valuegithub4,
          },
          {
            name: config.embeds.namegithub5,
            value: config.embeds.valuegithub5,
          }
        )
        .setFooter({ text: config.embed.embedfooter });

      const flagmessage = newEmbed // Flag Systeem
      const flags = ["everyone", "here", "delete"];

      if (!args[0]) {
        message.channel.send({ embeds: [flagmessage] })
      }

      if (args[0] === "delete") {
        if (!args[1]) {
          if (!args[2]) {
            message.delete();
            message.channel.send({ content: flagmessage })
          }
        }
      } else if (args[1] === "delete") {
        if (!args[0]) {
          if (!args[2]) {
            message.delete();
            message.channel.send({ content: flagmessage })
          }
        }
      } else if (args[2] === "delete") {
        if (!args[0]) {
          if (!args[1]) {
            message.delete();
            message.channel.send({ content: flagmessage })
          }
        }
      }

      if (args[0] === "everyone") {
        if (args[1] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[1] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@everyone`)
          message.channel.send({ embeds: [newEmbed] })
        } else {
          message.channel.send(`@everyone`)
          message.channel.send({ embeds: [newEmbed] })
        }
      } else if (args[1] === "everyone") {
        if (args[0] === "here") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@everyone`)
          message.channel.send({ embeds: [newEmbed] })
        } else {
          message.channel.send(`@everyone`)
          message.channel.send({ embeds: [newEmbed] })
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
          message.channel.send({ embeds: [newEmbed] })
        } else {
          message.channel.send(`@here`)
          message.channel.send({ embeds: [newEmbed] })
        }
      } else if (args[1] === "here") {
        if (args[0] === "everyone") {
          return message.channel.send(`You cannot use both group tags at the same time.`)
        } else if (args[0] || args[2] === "delete") {
          message.delete();
          message.channel.send(`@here`)
          message.channel.send({ embeds: [newEmbed] })
        } else {
          message.channel.send(`@here`)
          message.channel.send({ embeds: [newEmbed] })
        }
      } else if (args[2] === "here") {
        return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
    }
  },
};
