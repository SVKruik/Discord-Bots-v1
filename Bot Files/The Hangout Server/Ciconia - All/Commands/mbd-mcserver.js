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
          .setURL(config.embed.embedlink)
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

        message.channel.send(embed);
      })
      .catch((error) => {
        message.channel.send(
          config.basemessages.messagesfinderror
        );
      });
  },
};
