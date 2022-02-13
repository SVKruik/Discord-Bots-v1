const config = require("./../Other/config.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "github",
  aliases: config.aliases.aliasesgithub,
  cooldown: config.cooldown.cooldowngithub,
  permissions: config.permissions.permissiongithub,
  description: "Displays all import links to our GitHub repository.",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(config.embeds.titlegithub)
      .setImage(config.embed.embedimage)
      .setDescription(config.embeds.descriptiongithub)
      .addFields(
        {
          name: config.embeds.namegithub1,
          value: config.embeds.valuegithub1,
        },
        {
          name: config.embeds.namegithub2,
          value: config.embeds.valuegithub2,
        },
        {
          name: config.embeds.namegithub3,
          value: config.embeds.valuegithub3,
        },
        {
          name: config.embeds.namegithub4,
          value: config.embeds.valuegithub4,
        },
        {
          name: config.embeds.namegithub5,
          value: config.embeds.valuegithub5,
        }
      )
      .setFooter(config.embed.embedfooter);

    channel.send({ embeds: [newEmbed] });
  },
};
