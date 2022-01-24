const config = require('./../Other/config.js');

module.exports = {
  name: "serverip",
  aliases: config.aliases.aliasesserverip,
  cooldown: config.cooldown.cooldownserverip,
  description: "Display the server IP and information for MultiCube.",
  permissions: ["SEND_MESSAGES"],
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLESERVERIP)
      .setImage(process.env.MBDIMG)
      .setURL(process.env.MBDURL)
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
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};
