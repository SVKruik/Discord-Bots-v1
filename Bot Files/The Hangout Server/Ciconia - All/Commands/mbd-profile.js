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

    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(process.env.MBDTITLEPROFILE)
      .setImage(config.embed.embedimage)
      .setDescription(process.env.MBDDESCPROFILE)
      .addFields(
        { name: "---", value: "> **General:**" },
        { name: "Name:", value: `${message.author.username}` },
        { name: "Tag:", value: `#${tag}` },
        { name: "userID:", value: `${profileData.userID}` },
        { name: "serverID:", value: `${profileData.serverID}` },
        { name: "---", value: "> **Economy:**" },
        { name: "Coins:", value: `${profileData.coins}` },
        { name: "Bank:", value: `${profileData.bank}` },
        { name: "---", value: "> **Level:**" },
        { name: "Level:", value: `${profileData.level}` },
        { name: "Experience:", value: `${profileData.experience}` },
        { name: "---:", value: "> **Technical:**" },
        { name: "Document ID:", value: `${profileData._id}` },
        { name: "Version:", value: `${profileData.__v}` },
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
