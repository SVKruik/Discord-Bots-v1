const config = require("./../Other/config.js");

module.exports = {
  name: "serverip",
  aliases: config.aliases.aliasesserverip,
  cooldown: config.cooldown.cooldownserverip,
  permissions: config.permissions.permissionserverip,
  description: "Display the server IP and information for MultiCube.",
  execute(message, args, cmd, client, Discord) {
    if (args[2] === "delete") {
      message.delete();
    } else if (args[2] === "del" || args[2] === "d") {
      message.delete();
    }
    
    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(config.embeds.titleserverip)
      .setImage(config.embed.embedimage)
      .setURL(config.embed.embedlink)
      .setDescription(config.embeds.descriptionserverip)
      .addFields(
        {
          name: config.embeds.nameserverip1,
          value: config.embeds.valueserverip1,
        },
        {
          name: config.embeds.nameserverip2,
          value: config.embeds.valueserverip2,
        },
        {
          name: config.embeds.nameserverip3,
          value: config.embeds.valueserverip3,
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
