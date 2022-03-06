const config = require("../Other/config.js");

module.exports = {
  name: "botstatistics",
  aliases: config.aliases.aliasesbotstats,
  cooldown: config.cooldown.cooldownbotstats,
  permissions: config.permissions.permissionbotstats,
  description: "Displays all stats of the bot.",
  async execute(message, args, cmd, client, Discord) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`)
      const fs = require("fs");
      const commands = fs.readdirSync("./Commands").length;

      const days = Math.floor(client.uptime / 86400000);
      const hours = Math.floor(client.uptime / 3600000) % 24;
      const minutes = Math.floor(client.uptime / 60000) % 60;
      const seconds = Math.floor(client.uptime / 1000) % 60;

      const newEmbed = new Discord.MessageEmbed()
        .setColor(config.base.basecolor)
        .setTitle(config.embeds.titlebotstats)
        .setImage(config.embed.embedimage)
        .setDescription(config.embeds.descriptionbotstats)
        .addFields(
          {
            name: "Uptime:",
            value: `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`,
          },
          { name: "API Ping:", value: `${Math.round(client.ws.ping)} ms` },
          {
            name: "Bot Ping:",
            value: `${Date.now() - message.createdTimestamp} ms`,
          },
          { name: "serverID:", value: `${message.guild.id}` },
          { name: "Commands", value: `${commands}` },
          { name: config.embeds.namebotstats6, value: config.embeds.valuebotstats6 },
          { name: config.embeds.namebotstats7, value: config.embeds.valuebotstats7 }
        )
        .setFooter(config.embed.embedfooter);

      const flagmessage = newEmbed
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
      message.channel.send(`Error executing command. EC:`)
    }
  },
};
