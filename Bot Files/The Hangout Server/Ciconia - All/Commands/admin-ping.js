const config = require("./../Other/config.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "ping",
  aliases: config.aliases.aliasesping,
  cooldown: config.cooldown.cooldownping,
  permissions: config.permissions.permissionping,
  description: "This silences spamming or naughty people. Can only read stuff.",
  execute(message, args, cmd, client, Discord) {
    const botping = Date.now() - message.createdTimestamp
    const apiping = client.ws.ping
    const newEmbed = new MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle("Bot Latency")
      .setImage(config.embed.embedimage)
      .setDescription("This is my latency.")
      .addFields(
        {
          name: "Bot Latency:",
          value: `${botping} ms`,
        },
        {
          name: "API Latency:",
          value: `${apiping} ms`,
        }
      )
      .setFooter(config.embed.embedfooter);

    channel.send({ embeds: [newEmbed] });
  },
};
