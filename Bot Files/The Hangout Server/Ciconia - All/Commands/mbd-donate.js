const config = require("./../Other/config.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "donate",
  aliases: config.aliases.aliasesdonate,
  cooldown: config.cooldown.cooldowndonate,
  permissions: config.permissions.permissiondonate,
  description: "Support our project by donating to us.",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new MessageEmbed()
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

    channel.send({ embeds: [newEmbed] });
  },
};
