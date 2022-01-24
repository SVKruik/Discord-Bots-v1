const util = require("minecraft-server-util");
const config = require('./../Other/config.js');

module.exports = {
  name: "minecraftserver",
  aliases: config.aliases.aliasesmcserver,
  cooldown: config.cooldown.cooldownmcserver,
  permissions: ["SEND_MESSAGES"],
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
          .setColor(process.env.MBDCLR)
          .setTitle(process.env.MBDTITLEMCSERVER)
          .setURL(process.env.MBDURL)
          .setImage(process.env.MBDIMG)
          .setDescription(process.env.MBDDESCMCSERVER)
          .addFields(
            { name: "Server IP", value: response.host },
            { name: "Online Players", value: response.onlinePlayers },
            { name: "Max Players", value: response.maxPlayers },
            { name: "Version", value: response.version },
            { name: "Port", value: response.port },
            { name: "Mods", value: response.modInfo }
          )
          .setFooter(process.env.MBDFTR);

        message.channel.send(embed);
      })
      .catch((error) => {
        message.channel.send(
          "There was an error finding the specified server!"
        );
      });
  },
};
