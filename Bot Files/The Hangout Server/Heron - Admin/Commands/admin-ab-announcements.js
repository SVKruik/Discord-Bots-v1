// Grote announcements. Hiermee stuur je in een ander kanaal een bericht. Dit kan alles zijn. 
// De 'A' staat er zodat hij samen met Small Announcements staat. 'B' staat voor big.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "bigannouncements",
  aliases: config.aliases.aliasesabannouncements,
  cooldown: config.cooldown.cooldownannouncements,
  permissions: config.permissions.permissionannouncements,
  description: "Announce something using the bot.",
  async execute(message, args, cmd, client, Discord) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.

      const channel = client.channels.cache.find(channel => channel.id === config.base.baseannouncementschannelid)
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
      channel.send({ embeds: [newEmbed] }).then((msg) => {
        message.delete();
        message.channel.send(`Announcement sent in <#${config.base.baseannouncementschannelid}>.`)
      });

      const consolemsg = `${message.author.username} announced something (channel): || ${messageArgs} ||`
      console.log(consolemsg);
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err11}\`.`) // Error systeem
    }
  }
}