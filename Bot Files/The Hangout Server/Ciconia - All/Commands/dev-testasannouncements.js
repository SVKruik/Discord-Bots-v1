const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "testsmallannouncements",
  aliases: config.aliases.aliasestestasannouncements,
  cooldown: config.cooldown.cooldowntestannouncements,
  permissions: config.permissions.permissiontestannouncements,
  description: "Test announce something direct using the bot.",
  async execute(message, args, cmd, client, Discord) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
      const messageArgs = args.join(' '); // Alle args naar text

      const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
        .setColor(config.base.basecolor)
        .addFields(
          {
            name: `**Heads up:**`,
            value: `${messageArgs}`,
          })
      message.channel.send(newEmbed)
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err11}\`.`) // Error systeem
    }
  },
};