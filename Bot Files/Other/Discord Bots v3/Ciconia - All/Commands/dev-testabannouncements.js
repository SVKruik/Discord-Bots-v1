// Testen van de Big Announcements. Kan je kijken hoe hij er uit ziet bij het sturen, of gewoon bug checken.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "testbigannouncements",
  aliases: config.aliases.aliasestestabannouncements,
  cooldown: config.cooldown.cooldowntestannouncements,
  permissions: config.permissions.permissiontestannouncements,
  description: "Test announce something using the bot.",
  async execute(message, args, cmd, client, Discord) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
      const channel = client.channels.cache.find(channel => channel.id === config.base.basebottestingthreechannelid)
      const messageArgs = args.join(' '); // Alle args naar text

      const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
        .setColor(config.base.basecolor)
        .setTitle("New Announcement")
        .setImage(config.embed.embedimage)
        .addFields(
          {
            name: `**---**`,
            value: `${messageArgs}`,
          })
        .setFooter(config.embed.embedfooter)
      channel.send(newEmbed).then((msg) => {
        message.channel.send(`Test Announcement sent in <#${config.base.basebottestingthreechannelid}>.`)
      });
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err11}\`.`) // Error systeem
    }
  },
}