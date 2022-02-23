const config = require("./../Other/config.js");

module.exports = {
  name: "ping",
  aliases: config.aliases.aliasesping,
  cooldown: config.cooldown.cooldownping,
  permissions: config.permissions.permissionping,
  description: "This silences spamming or naughty people. Can only read stuff.",
  execute(message, args, cmd, client, Discord) {
    if (args[2] === "delete") {
      message.delete();
    } else if (args[2] === "del" || args[2] === "d") {
      message.delete();
    }

    const botping = Date.now() - message.createdTimestamp
    const apiping = client.ws.ping
    const newEmbed = new Discord.MessageEmbed()
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

    message.channel.send(newEmbed);
  },
};
