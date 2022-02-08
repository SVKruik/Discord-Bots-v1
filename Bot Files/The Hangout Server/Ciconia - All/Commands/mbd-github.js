const config = require("./../Other/config.js");

module.exports = {
  name: "github",
  aliases: config.aliases.aliasesgithub,
  cooldown: config.cooldown.cooldowngithub,
  permissions: config.permissions.permissiongithub,
  description: "Displays all import links to our GitHub repository.",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(process.env.MBDTITLEGITHUB)
      .setImage(config.embed.embedimage)
      .setDescription(process.env.MBDDESCGITHUB)
      .addFields(
        {
          name: process.env.MBDFIELD1NAMEGITHUB,
          value: process.env.MBDFIELD1VALUEGITHUB,
        },
        {
          name: process.env.MBDFIELD2NAMEGITHUB,
          value: process.env.MBDFIELD2VALUEGITHUB,
        },
        {
          name: process.env.MBDFIELD3NAMEGITHUB,
          value: process.env.MBDFIELD3VALUEGITHUB,
        },
        {
          name: process.env.MBDFIELD4NAMEGITHUB,
          value: process.env.MBDFIELD4VALUEGITHUB,
        },
        {
          name: process.env.MBDFIELD5NAMEGITHUB,
          value: process.env.MBDFIELD5VALUEGITHUB,
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
