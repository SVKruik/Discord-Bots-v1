module.exports = {
  name: "flipacoin",
  aliases: ["fac"],
  cooldown: process.env.ASSOFT,
  permissions: ["SEND_MESSAGES"],
  description: "Flip a coin!",
  async execute(message, args, cmd, client, Discord, profileData) {
    var chance = Math.random() * 100;
    if (chance < 50) message.channel.send("It landed on: `HEAD`!");
    else if (chance < 100) message.channel.send("It landed on: `TAILS`!");
  },
};
