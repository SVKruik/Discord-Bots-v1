const config = require("../Other/config.js");

module.exports = {
  name: "botstatistics",
  aliases: config.aliases.aliasesbotstats,
  cooldown: config.cooldown.cooldownbotstats,
  permissions: config.permissions.permissionbotstats,
  description: "Displays all stats of the bot.",
  async execute(message, args, cmd, client, Discord, profileData) {
    const version = require("../package.json").version;

    const days = Math.floor(client.uptime / 86400000);
    const hours = Math.floor(client.uptime / 3600000) % 24;
    const minutes = Math.floor(client.uptime / 60000) % 60;
    const seconds = Math.floor(client.uptime / 1000) % 60;

    const fs = require("fs");
    const commands = fs.readdirSync("./Commands").length;

    if (args[2] === "delete") {
      message.delete();
    } else if (args[2] === "del" || args[2] === "d") {
      message.delete();
    }

    const newEmbed = new MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(config.embeds.titlebotstats)
      .setImage(config.embed.embedimage)
      .setDescription(config.embeds.descriptionbotstats)
      .addFields(
        {
          name: "Uptime:",
          value: `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`,
        },
        { name: "API Ping:", value: `${Math.round(client.ws.ping)} ms` },
        {
          name: "Bot Ping:",
          value: `${Date.now() - message.createdTimestamp} ms`,
        },
        { name: "serverID:", value: `${message.guild.id}` },
        { name: "Commands", value: `${commands}` },
        { name: config.embeds.namebotstats6, value: config.embeds.valuebotstats6 },
        { name: config.embeds.namebotstats7, value: config.embeds.valuebotstats7 }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send({ embeds: [ embed ]});
  },
};