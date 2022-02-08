const config = require("./../Other/config.js");

module.exports = {
  name: "serverip",
  aliases: config.aliases.aliasesserverip,
  cooldown: config.cooldown.cooldownserverip,
  permissions: config.permissions.permissionserverip,
  description: "Display the server IP and information for MultiCube.",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(process.env.MBDTITLESERVERIP)
      .setImage(config.embed.embedimage)
      .setURL(config.embed.embedlink)
      .setDescription(process.env.MBDDESCSERVERIP)
      .addFields(
        {
          name: process.env.MBDFIELD1NAMESERVERIP,
          value: MBDFIELD1VALUESERVERIP,
        },
        {
          name: process.env.MBDFIELD2NAMESERVERIP,
          value: MBDFIELD2VALUESERVERIP,
        },
        {
          name: process.env.MBDFIELD3NAMESERVERIP,
          value: MBDFIELD3VALUESERVERIP,
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
