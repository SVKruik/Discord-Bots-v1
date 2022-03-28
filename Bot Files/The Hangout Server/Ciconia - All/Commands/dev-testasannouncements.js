// Testen van de Small Announcements. Kan je kijken hoe hij er uit ziet bij het sturen, of gewoon bug checken.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "testsmallannouncements",
  aliases: config.aliases.aliasestestasannouncements,
  cooldown: config.cooldown.cooldowntestannouncements,
  permissions: config.permissions.permissiontestannouncements,
  description: "Test announce something direct using the bot.",
  async execute(message, args, cmd, client, Discord) {
    try {
      const messageArgs = args.join(' '); // Alle args naar text
      const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
        .setColor(config.base.basecolor)
        .addFields(
          {
            name: `**Heads up:**`,
            value: `${messageArgs}`,
          })
      message.channel.send({ embeds: [newEmbed] })
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err11}\`.`) // Error systeem
    }
  },
};
