const config = require('./../Other/config.js');

module.exports = {
  name: "rules",
  aliases: config.aliases.aliasesrules,
  cooldown: config.cooldown.cooldownrules,
  description: "Displays an embed with our active server rules.",
  permissions: ["SEND_MESSAGES"],
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLERULES)
      .setURL(process.env.MBDURL)
      .setImage(process.env.MBDIMG)
      .setDescription(process.env.MBDDESCRULES)
      .addFields(
        {
          name: process.env.MBDFIELD1NAMERULES,
          value: process.env.MBDFIELD1VALUERULES,
        },
        {
          name: process.env.MBDFIELD2NAMERULES,
          value: process.env.MBDFIELD2VALUERULES,
        },
        {
          name: process.env.MBDFIELD3NAMERULES,
          value: process.env.MBDFIELD3VALUERULES,
        },
        {
          name: process.env.MBDFIELD4NAMERULES,
          value: process.env.MBDFIELD4VALUERULES,
        },
        {
          name: process.env.MBDFIELD5NAMERULES,
          value: process.env.MBDFIELD5VALUERULES,
        },
        {
          name: process.env.MBDFIELD6NAMERULES,
          value: process.env.MBDFIELD6VALUERULES,
        }
      )
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};
