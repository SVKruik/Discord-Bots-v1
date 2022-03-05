const config = require("./../Other/config.js");

module.exports = {
  name: "dice",
  aliases: config.aliases.aliasesdice,
  cooldown: config.cooldown.cooldowndice,
  permissions: config.permissions.permissiondice,
  description: "Roll the dice!",
    async execute(message, args, cmd, client, Discord) {
    const fac = ["1! 🎲", "2! 🎲", "3! 🎲", "4! 🎲", "5! 🎲", "6! 🎲"];
    const random = fac[Math.floor(Math.random() * fac.length)];
    message.channel.send(random);
  },
};