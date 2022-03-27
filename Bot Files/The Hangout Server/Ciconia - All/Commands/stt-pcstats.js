// Laat wat statistieken van de host pc zien, als RAM gebruik en platform.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const os = require('os');

module.exports = {
  name: "pcstatistics",
  aliases: config.aliases.aliasespcstats,
  cooldown: config.cooldown.cooldownpcstats,
  permissions: config.permissions.permissionpcstats,
  description: "Displays all stats of the host pc.",
  async execute(message, args, cmd, client, Discord) {
    try {
      const totalram = ((os.totalmem() / 10 ** 6 + " ").split('.')[0]);
      const freeram = ((os.freemem() / 10 ** 6 + " ").split('.')[0]);
      const usedram = (((os.totalmem() - os.freemem()) / 10 ** 6 + " ").split('.')[0]);
      const platform = os.platform
      const uptimemin1 = Math.round(os.uptime / 60)
      const uptimehr = Math.floor(os.uptime / 3600)
      const uptimemin2 = uptimehr * 60
      const uptimemin = uptimemin1 - uptimemin2
      const version = os.version

      console.log("Total Ram: " + totalram)
      console.log("Free Ram: " + freeram)
      console.log("Used Ram: " + usedram)
      console.log("Platform: " + platform)
      console.log("Uptime Minutes: " + uptimemin)
      console.log("Uptime Hours: " + uptimehr)
      console.log("Version: " + version)

      const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
        .setColor(config.base.basecolor)
        .setTitle(config.embeds.titlepcstats)
        .setImage(config.embed.embedimage)
        .setDescription(config.embeds.descriptionpcstats)
        .addFields(
          { name: config.embeds.namepcstats1, value: totalram },
          { name: config.embeds.namepcstats2, value: freeram },
          { name: config.embeds.namepcstats3, value: usedram },
          { name: config.embeds.namepcstats4, value: platform },
          { name: config.embeds.namepcstats5, value: `${uptimehr} Hours and ${uptimemin} Minutes.` },
          { name: config.embeds.namepcstats6, value: version }
        )
        .setFooter({ text: config.embed.embedfooter });

      const flagmessage = newEmbed // Flag Systeem
      const flags = ["everyone", "here", "delete"];

      // if (!args[0]) {
      //   message.channel.send({ embeds: [flagmessage] })
      // }

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
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err15}\`.`)
    }
  },
};
