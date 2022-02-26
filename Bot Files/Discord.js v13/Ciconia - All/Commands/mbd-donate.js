const config = require("./../Other/config.js");

module.exports = {
  name: "donate",
  aliases: config.aliases.aliasesdonate,
  cooldown: config.cooldown.cooldowndonate,
  permissions: config.permissions.permissiondonate,
  description: "Support our project by donating to us.",
  execute(message, args, cmd, client, Discord) {
    if (args[2] === "delete") {
      message.delete();
    } else if (args[2] === "del" || args[2] === "d") {
      message.delete();
    }
    
    const embed = new MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(config.embeds.titledonate)
      .setImage(config.embed.embedimage)
      .setURL(config.embed.embedlink)
      .setDescription(config.embeds.descriptiondonate)
      .addFields(
        {
          name: config.embeds.namedonate1,
          value: config.embeds.valuedonate1,
        },
        {
          name: config.embeds.namedonate2,
          value: config.embeds.valuedonate2,
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send({ embeds: [ embed ]});
  },
};