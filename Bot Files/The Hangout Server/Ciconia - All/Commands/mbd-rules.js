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
      .setTitle(config.embeds.titlerules)
      .setURL(config.embed.embedlink)
      .setImage(config.embed.embedimage)
      .setDescription(config.embeds.descriptionrules)
      .addFields(
        {
          name: config.embeds.namerules1,
          value: config.embeds.valuerules1,
        },
        {
          name: config.embeds.namerules2,
          value: config.embeds.valuerules2,
        },
        {
          name: config.embeds.namerules3,
          value: config.embeds.valuerules3,
        },
        {
          name: config.embeds.namerules4,
          value: config.embeds.valuerules4,
        },
        {
          name: config.embeds.namerules5,
          value: config.embeds.valuerules5,
        },
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
