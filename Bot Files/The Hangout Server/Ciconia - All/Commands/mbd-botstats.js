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

    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle(config.embeds.titlebotstats)
      .setImage(config.embed.embedimage)
      .setDescription(config.embeds.descriptionbotstats)
      .addFields(
        {
          name: config.embeds.namebotstats1,
          value: config.embeds.valuebotstats1,
        },
        { 
          name: config.embeds.namebotstats2, 
          value: config.embeds.valuebotstats2,
        },
        {
          name: config.embeds.namebotstats3,
          value: config.embeds.valuebotstats3,
        },
        { 
          name: config.embeds.namebotstats4, 
          value: config.embeds.valuebotstats4 
        },
        { 
          name: config.embeds.namebotstats5, 
          value: config.embeds.valuebotstats5 
        },
        { 
          name: config.embeds.namebotstats6, 
          value: config.embeds.valuebotstats6 
        },
        { 
          name: config.embeds.namebotstats7, 
          value: config.embeds.valuebotstats7 
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
