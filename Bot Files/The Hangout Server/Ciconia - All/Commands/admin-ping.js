const config = require("./../Other/config.js");

module.exports = {
  name: "ping",
  aliases: config.aliases.aliasesping,
  cooldown: config.cooldown.cooldownping,
  permissions: config.permissions.permissionping,
  description: "This silences spamming or naughty people. Can only read stuff.",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle("Bot Latency")
      .setImage(config.embed.embedimage)
      .setDescription("This is my latency.")
      .addFields(
        {
          name: "Bot Latency:",
          value: `${Date.now() - message.createdTimestamp} ms`,
        },
      {
          name: "API Latency:",
          value: `${Math.round(client.ws.ping)} ms`,
        }
      )
      .setFooter(config.embed.embedfooter);

    message.channel.send(newEmbed);
  },
};
