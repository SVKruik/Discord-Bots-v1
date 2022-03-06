const config = require("../Other/config.js");

module.exports = {
  name: "dice",
  aliases: config.aliases.aliasesdice,
  cooldown: config.cooldown.cooldowndice,
  permissions: config.permissions.permissiondice,
  description: "Roll the dice!",
  async execute(message, args, cmd, client, Discord) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`)
      const fac = ["1! 🎲", "2! 🎲", "3! 🎲", "4! 🎲", "5! 🎲", "6! 🎲"];
      const random = fac[Math.floor(Math.random() * fac.length)];
      message.channel.send(random);
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err15}\`.`)
    }
  },
};