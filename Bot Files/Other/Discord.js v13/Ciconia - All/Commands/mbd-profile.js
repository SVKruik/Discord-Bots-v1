const config = require("./../Other/config.js");

module.exports = {
  name: "profile",
  aliases: config.aliases.aliasesprofile,
  cooldown: config.cooldown.cooldownprofile,
  permissions: config.permissions.permissionprofile,
  description: "Displays all information we have about you.",
  execute(message, args, cmd, client, Discord, profileData) {
    const tagfull = message.author.tag;
    const tag = tagfull.slice(-4);

    const embed = new MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(config.embeds.titleprofile)
      .setImage(config.embed.embedimage)
      .setDescription(config.embeds.descriptionprofile)
      .addFields(
        { name: config.embeds.nameprofile1, value: "> **General:**" },
        { name: config.embeds.nameprofile2, value: `${message.author.username}` },
        { name: config.embeds.nameprofile3, value: `#${tag}` },
        { name: config.embeds.nameprofile4, value: `${profileData.userID}` },
        { name: config.embeds.nameprofile5, value: `${profileData.serverID}` },
        { name: config.embeds.nameprofile6, value: "> **Economy:**" },
        { name: config.embeds.nameprofile7, value: `${profileData.coins}` },
        { name: config.embeds.nameprofile8, value: `${profileData.bank}` },
        { name: config.embeds.nameprofile9, value: "> **Level:**" },
        { name: config.embeds.nameprofile10, value: `${profileData.level}` },
        { name: config.embeds.nameprofile11, value: `${profileData.experience}` },
        { name: config.embeds.nameprofile12, value: "> **Technical:**" },
        { name: config.embeds.nameprofile13, value: `${profileData._id}` },
        { name: config.embeds.nameprofile14, value: `${profileData.__v}` },
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send({ embeds: [ embed ]});
  },
};
