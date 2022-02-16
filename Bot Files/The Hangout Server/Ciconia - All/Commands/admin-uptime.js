const config = require("./../Other/config.js");

module.exports = {
  name: "uptime",
  aliases: config.aliases.aliasesuptime,
  cooldown: config.cooldown.cooldownuptime,
  permissions: config.permissions.permissionuptime,
  description: "Check the uptime of the bot.",
  execute(message, args, cmd, client, Discord) {
    if (args[2] === "delete") {
      message.delete();
    } else if (args[2] === "del" || args[2] === "d") {
      message.delete();
    }
    
    const days = Math.floor(client.uptime / 86400000);
    const hours = Math.floor(client.uptime / 3600000) % 24;
    const minutes = Math.floor(client.uptime / 60000) % 60;
    const seconds = Math.floor(client.uptime / 1000) % 60;

    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle("Bot Uptime")
      .setImage(config.embed.embedimage)
      .setDescription("Check the uptime of the bot.")
      .addFields({
        name: `Uptime:`,
        value: `My current uptime is ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`,
      })
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
