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
      return message.channel.send("Please enter a valid Minecraft server IP!");
    if (!args[1])
      return message.channel.send(
        "Please enter a valid Minecraft server port!"
      );

    util
      .status(args[0], { port: parseInt(args[1]) })
      .then((response) => {
        console.log(response);
        const embed = new Discord.MessageEmbed()
          .setColor(config.base.basecolor)
          .setTitle(process.env.MBDTITLEMCSERVER)
          .setURL(config.embed.embedlink)
          .setImage(config.embed.embedimage)
          .setDescription(process.env.MBDDESCMCSERVER)
          .addFields(
            { name: "Server IP", value: response.host },
            { name: "Online Players", value: response.onlinePlayers },
            { name: "Max Players", value: response.maxPlayers },
            { name: "Version", value: response.version },
            { name: "Port", value: response.port },
            { name: "Mods", value: response.modInfo }
          )
          .setFooter(config.embed.embedfooter);

        message.channel.send(embed);
      })
      .catch((error) => {
        message.channel.send(
          "There was an error finding the specified server!"
        );
      });
  },
};
