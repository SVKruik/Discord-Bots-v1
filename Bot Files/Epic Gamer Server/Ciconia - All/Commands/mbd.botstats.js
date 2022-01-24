const config = require('./../Other/config.js');

module.exports = {
    name: "botstatistics",
    aliases: config.aliases.aliasesbotstats,
    cooldown: config.cooldown.cooldownbotstats,
    permissions: config.permissions.permissionbotstats,
    description: "Displays all stats of the bot.",
    async execute(message, args, cmd, client, Discord, profileData) {
      const version = (require('./../package.json').version);

      const days = Math.floor(client.uptime / 86400000);
      const hours = Math.floor(client.uptime / 3600000) % 24;
      const minutes = Math.floor(client.uptime / 60000) % 60;
      const seconds = Math.floor(client.uptime / 1000) % 60;

      const fs = require('fs')
      const commands = fs.readdirSync('./commands').length
  
      const newEmbed = new Discord.MessageEmbed()
        .setColor(process.env.MBDCLR)
        .setTitle("Bot Statistics")
        .setImage(process.env.MBDIMG)
        .setDescription("These are my stats at the moment:")
        .addFields(
          { name: "Uptime:", value: `My current uptime is ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`, },
          { name: "API Ping:", value: `${Math.round(client.ws.ping)} ms` },
          { name: "Bot Ping:", value: `${Date.now() - message.createdTimestamp} ms` },
          { name: "serverID:", value: `${profileData.serverID}` },
          { name: "Commands", value: `${commands}`},
          { name: "Bot Version:", value: `${version}` },
          { name: "Owner:", value: `<@422704748488163332>` }
        )
        .setFooter(process.env.MBDFTR);
  
      message.channel.send(newEmbed);
    },
  };