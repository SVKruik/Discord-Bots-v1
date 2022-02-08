const config = require("./../Other/config.js");

module.exports = {
  name: "rules",
  aliases: config.aliases.aliasesrules,
  cooldown: config.cooldown.cooldownrules,
  permissions: config.permissions.permissionrules,
  description: "Displays an embed with our active server rules.",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(process.env.MBDTITLERULES)
      .setURL(config.embed.embedlink)
      .setImage(config.embed.embedimage)
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
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
