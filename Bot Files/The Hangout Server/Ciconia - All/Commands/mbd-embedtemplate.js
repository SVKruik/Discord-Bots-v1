const config = require("./../Other/config.js");

module.exports = {
  name: "embedtemplate",
  aliases: config.aliases.aliasesembedtemplate,
  cooldown: config.cooldown.cooldownembedtemplate,
  permissions: config.permissions.permissionembedtemplate,
  description: "Embed template for devs.",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(process.env.MBDTITLEMBDTEMP)
      .setImage(config.embed.embedimage)
      .setURL(config.embed.embedlink)
      .setDescription(process.env.MBDDESCMBDTEMP)
      .addFields(
        {
          name: process.env.MBDFIELD1NAMEMBDTEMP,
          value: process.env.MBDFIELD1VALUEMBDTEMP,
        },
        {
          name: process.env.MBDFIELD2NAMEMBDTEMP,
          value: process.env.MBDFIELD2VALUEMBDTEMP,
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
