const config = require("./../Other/config.js");

module.exports = {
  name: "donate",
  aliases: config.aliases.aliasesdonate,
  cooldown: config.cooldown.cooldowndonate,
  permissions: config.permissions.permissiondonate,
  description: "Support our project by donating to us.",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(process.env.MBDTITLEDONATE)
      .setImage(config.embed.embedimage)
      .setURL(config.embed.embedlink)
      .setDescription(process.env.MBDDESCDONATE)
      .addFields(
        {
          name: process.env.MBDFIELD1NAMEDONATE,
          value: process.env.MBDFIELD1VALUEDONATE,
        },
        {
          name: process.env.MBDFIELD2NAMEDONATE,
          value: process.env.MBDFIELD2VALUEDONATE,
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
