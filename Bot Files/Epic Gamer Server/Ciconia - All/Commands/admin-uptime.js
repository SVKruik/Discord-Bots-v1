const config = require('./../Other/config.js');

module.exports = {
  name: "uptime",
  aliases: config.aliases.aliasesuptime,
  cooldown: process.env.ASMID,
  description: "Check the uptime of the bot.",
  permissions: ["ADMINISTRATOR"],
  execute(message, args, cmd, client, Discord) {
    const days = Math.floor(client.uptime / 86400000);
    const hours = Math.floor(client.uptime / 3600000) % 24;
    const minutes = Math.floor(client.uptime / 60000) % 60;
    const seconds = Math.floor(client.uptime / 1000) % 60;

    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle("Bot Uptime")
      .setImage(process.env.MBDIMG)
      .setDescription("Check the uptime of the bot.")
      .addFields({
        name: `Uptime:`,
        value: `My current uptime is ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`,
      })
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};
