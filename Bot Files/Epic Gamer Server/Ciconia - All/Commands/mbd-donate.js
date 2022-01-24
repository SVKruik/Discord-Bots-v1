const config = require('./../Other/config.js');

module.exports = {
  name: "donate",
  aliases: config.aliases.aliasesdonate,
  cooldown: process.env.ASMID,
  description: "Support our project by donating to us.",
  permissions: ["SEND_MESSAGES"],
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLEDONATE)
      .setImage(process.env.MBDIMG)
      .setURL(process.env.MBDURL)
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
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};
