const config = require('./../Other/config.js');

module.exports = {
  name: "kopofmunt",
  aliases: ["facnl", "kopmunt"],
  cooldown: process.env.ASSOFT,
  permissions: ["SEND_MESSAGES"],
  description: "Kop of munt!",
  async execute(message, args, cmd, client, Discord, profileData) {
    var chance = Math.random() * 100;
    if (chance < 50) message.channel.send("Hij is geland op: `KOP`!");
    else if (chance < 100) message.channel.send("Hij is geland op: `MUNT`!");
  },
};
