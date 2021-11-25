module.exports = {
  name: "serverip",
  aliases: ["server"],
  cooldown: process.env.ASMID,
  description: "Display the server ip for MultiCube",
  permissions: ["SEND_MESSAGES"],
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLESERVERIP)
      .setImage(process.env.MBDIMG)
      .setURL(process.env.MBDURL)
      .setDescription(process.env.MBDDESCSERVERIP)
      .addFields(
        {
          name: process.env.MBDFIELD1NAMESERVERIP,
          value: MBDFIELD1VALUESERVERIP,
        },
        {
          name: process.env.MBDFIELD2NAMESERVERIP,
          value: MBDFIELD2VALUESERVERIP,
        },
        {
          name: process.env.MBDFIELD3NAMESERVERIP,
          value: MBDFIELD3VALUESERVERIP,
        }
      )
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};
