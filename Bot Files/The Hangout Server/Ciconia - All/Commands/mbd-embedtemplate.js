const config = require("./../Other/config.js");

module.exports = {
  name: "embedtemplate",
  aliases: config.aliases.aliasesembedtemplate,
  cooldown: config.cooldown.cooldownembedtemplate,
  permissions: config.permissions.permissionembedtemplate,
  description: "Embed template for devs.",
  execute(message, args, cmd, client, Discord) {
    if (args[2] === "delete") {
      message.delete();
    } else if (args[2] === "del" || args[2] === "d") {
      message.delete();
    }
    
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