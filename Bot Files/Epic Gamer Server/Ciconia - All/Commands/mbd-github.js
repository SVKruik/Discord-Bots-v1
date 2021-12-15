module.exports = {
  name: "github",
  aliases: ["gh"],
  cooldown: process.env.ASMID,
  description: "Displays all import links to our GitHub repository.",
  permissions: ["SEND_MESSAGES"],
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLEGITHUB)
      .setImage(process.env.MBDIMG)
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
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};