// Check hoe lang de bot al wakker is.

const config = require("../Other/config.js");

module.exports = {
  name: "uptime",
  aliases: config.aliases.aliasesuptime,
  cooldown: config.cooldown.cooldownuptime,
  permissions: config.permissions.permissionuptime,
  description: "Check the uptime of the bot.",
  execute(message, args, cmd, client, Discord) {
    try {
      const days = Math.floor(client.uptime / 86400000);
      const hours = Math.floor(client.uptime / 3600000) % 24;
      const minutes = Math.floor(client.uptime / 60000) % 60;
      const seconds = Math.floor(client.uptime / 1000) % 60; // Tijden converteren naar ..

      const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
        .setColor(config.base.basecolor)
        .setTitle("Bot Uptime")
        .setImage(config.embed.embedimage)
        .setDescription("Check the uptime of the bot.")
        .addFields({
          name: `Uptime:`,
          value: `My current uptime is ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`,
        })
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
            message.channel.send({ embeds: [flagmessage] })
          }
        }
      } else if (args[1] === "delete") {
        if (!args[0]) {
          if (!args[2]) {
            message.delete();
            message.channel.send({ embeds: [flagmessage] })
          }
        }
      } else if (args[2] === "delete") {
        if (!args[0]) {
          if (!args[1]) {
            message.delete();
            message.channel.send({ embeds: [flagmessage] })
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
