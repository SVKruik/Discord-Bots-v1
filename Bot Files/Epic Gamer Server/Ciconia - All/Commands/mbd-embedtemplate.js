const config = require('./../Other/config.js');

module.exports = {
  name: "embedtemplate",
  aliases: config.aliases.aliasesembedtemplate,
  cooldown: process.env.ASMID,
  description: "Embed template for devs.",
  permissions: ["SEND_MESSAGES"],
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLEMBDTEMP)
      .setImage(process.env.MBDIMG)
      .setURL(process.env.MBDURL)
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
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};
