module.exports = {
  name: "ping",
  aliases: ["pong"],
  cooldown: process.env.ASSOFT,
  permissions: ["ADMINISTRATOR"],
  description: "Ping all online bots, error checking.",
  async execute(message, args, cmd, client, Discord, profileData) {
    var chance = Math.random() * 100;
    if (chance < process.env.PINGCHANCE1)
      message.channel.send(process.env.MSGPINGCHANCE1);
    else if (chance < process.env.PINGCHANCE2)
      message.channel.send(process.env.MSGPINGCHANCE2);
    else message.channel.send(process.env.MSGPINGCHANCE3);
  },
};
