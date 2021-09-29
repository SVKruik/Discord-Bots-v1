module.exports = {
  name: "ping",
  aliases: ["pong"],
  cooldown: process.env.ASSOFT,
  permissions: ["ADMINISTRATOR"],
  description: "Ping check bot, error checking.",
  async execute(message, args, cmd, client, Discord, profileData) {
    var chance = Math.random() * 100;
    if (chance < 39) message.channel.send("Ping!");
    else if (chance < 69) message.channel.send("Pong!");
    else if (chance < 90) message.channel.send("Can you stop already, it works, now leave me alone.");
    else message.channel.send("Shut!");
  },
};
