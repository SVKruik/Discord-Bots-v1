module.exports = {
  name: "ping",
  aliases: ["pong"],
  cooldown: process.env.ASMID,
  description: "Check the latency of the bot.",
  permissions: ["ADMINISTRATOR"],
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
