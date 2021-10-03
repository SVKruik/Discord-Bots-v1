module.exports = {
  name: "ping",
  aliases: ["pong"],
  cooldown: process.env.ASSOFT,
  permissions: ["ADMINISTRATOR"],
  description: "Ping check bot, error checking.",
  async execute(message, args, cmd, client, Discord, profileData) {
    var chance = Math.random() * 100;
    if (chance < 49) message.channel.send("Ping!");
    else if (chance < 98) message.channel.send("Pong!");
    else message.channel.send("Shut!");
  },
};