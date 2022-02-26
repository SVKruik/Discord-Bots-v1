const config = require("../Other/config.js");

module.exports = {
  name: "embedtemplate",
  aliases: config.aliases.aliasestemplateembed,
  cooldown: config.cooldown.cooldowntemplateembed,
  permissions: config.permissions.permissiontemplatecommand,
  description: "Embed template for devs.",
  execute(message, args, cmd, client, Discord, profileData) {
    
    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(config.embeds.titleembedtemplate)
      .setImage(config.embed.embedimage)
      .setURL(config.embed.embedlink)
      .setDescription(config.embeds.descriptionembedtemplate)
      .addFields(
        {
          name: config.embeds.nameembedtemplate1,
          value: config.embeds.valueembedtemplate1,
        },
        {
          name: config.embeds.nameembedtemplate2,
          value: config.embeds.valueembedtemplate2,
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
