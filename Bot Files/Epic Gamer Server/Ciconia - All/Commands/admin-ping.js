const config = require("./../Other/config.js");

module.exports = {
  name: "ping",
  aliases: config.aliases.aliasesping,
  cooldown: config.cooldown.cooldownping,
  permissions: config.permissions.permissionping,
  description: "This silences spamming or naughty people. Can only read stuff.",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle("Bot Latency")
      .setImage(process.env.MBDIMG)
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
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};
