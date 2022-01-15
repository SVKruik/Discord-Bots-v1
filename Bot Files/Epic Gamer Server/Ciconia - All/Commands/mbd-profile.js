module.exports = {
  name: "profile",
  aliases: ["prof"],
  cooldown: process.env.ASMID,
  description: "Displays all information we have about you.",
  permissions: ["SEND_MESSAGES"],
  execute(message, args, cmd, client, Discord, profileData) {
    const tagfull = message.author.tag;
    const tag = tagfull.slice(-4);

    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLEPROFILE)
      .setImage(process.env.MBDIMG)
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
        { name: "Experience:", value: `${profileData.experience}` }
      )
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};
