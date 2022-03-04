const util = require("minecraft-server-util");
const config = require("./../Other/config.js");

module.exports = {
  name: "minecraftserver",
  aliases: config.aliases.aliasesmcserver,
  cooldown: config.cooldown.cooldownmcserver,
  permissions: config.permissions.permissionmcserver,
  description: "Displays some Minecraft server statistics.",
  execute(message, args, cmd, client, Discord) {
    if (!args[0])
      return message.channel.send(config.commandmcserver.commandmcserverip);
    if (!args[1])
      return message.channel.send(
        config.commandmcserver.commandmcserverport
      );

    util
      .status(args[0], { port: parseInt(args[1]) })
      .then((response) => {
        const embed = new Discord.MessageEmbed()
          .setColor(config.base.basecolor)
          .setTitle(config.embeds.titlemcserver)

          .setImage(config.embed.embedimage)
          .setDescription(config.embeds.descriptionmcserver)
          .addFields(
            { name: config.embeds.namemcserver1, value: response.host },
            { name: config.embeds.namemcserver2, value: response.onlinePlayers },
            { name: config.embeds.namemcserver3, value: response.maxPlayers },
            { name: config.embeds.namemcserver4, value: response.version },
            { name: config.embeds.namemcserver5, value: response.port },
            { name: config.embeds.namemcserver6, value: response.modInfo }
          )
          .setFooter(config.embed.embedfooter);

        const flagmessage = newEmbed
        const flags = ["everyone", "here", "delete"];

        if (!args[2]) {
          message.channel.send(flagmessage)
        }

        if (args[2] === "delete") {
          if (!args[3]) {
            if (!args[4]) {
              message.delete();
              message.channel.send(flagmessage)
            }
          }
        } else if (args[3] === "delete") {
          if (!args[2]) {
            if (!args[4]) {
              message.delete();
              message.channel.send(flagmessage)
            }
          }
        } else if (args[4] === "delete") {
          if (!args[2]) {
            if (!args[3]) {
              message.delete();
              message.channel.send(flagmessage)
            }
          }
        }

        if (args[2] === "everyone") {
          if (args[3] === "here") {
            return message.channel.send(`You cannot use both group tags at the same time.`)
          } else if (args[3] || args[4] === "delete") {
            message.delete();
            message.channel.send(`@everyone`)
            message.channel.send(newEmbed)
          } else {
            message.channel.send(`@everyone`)
            message.channel.send(newEmbed)
          }
        } else if (args[3] === "everyone") {
          if (args[2] === "here") {
            return message.channel.send(`You cannot use both group tags at the same time.`)
          } else if (args[2] || args[4] === "delete") {
            message.delete();
            message.channel.send(`@everyone`)
            message.channel.send(newEmbed)
          } else {
            message.channel.send(`@everyone`)
            message.channel.send(newEmbed)
          }
        } else if (args[4] === "everyone") {
          return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
        }

        if (args[2] === "here") {
          if (args[3] === "everyone") {
            return message.channel.send(`You cannot use both group tags at the same time.`)
          } else if (args[3] || args[4] === "delete") {
            message.delete();
            message.channel.send(`@here`)
            message.channel.send(newEmbed)
          } else {
            message.channel.send(`@here`)
            message.channel.send(newEmbed)
          }
        } else if (args[3] === "here") {
          if (args[2] === "everyone") {
            return message.channel.send(`You cannot use both group tags at the same time.`)
          } else if (args[2] || args[4] === "delete") {
            message.delete();
            message.channel.send(`@here`)
            message.channel.send(newEmbed)
          } else {
            message.channel.send(`@here`)
            message.channel.send(newEmbed)
          }
        } else if (args[4] === "here") {
          return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
        }
      })
      .catch((error) => {
        console.log(error)
        message.channel.send(`Error executing command. EC: \`${config.errorcodes.err8}\`.`)
      });
  },
};
