const config = require("../Other/config.js");

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
      console.log(`${message.author.username} used this command: || ${command.name} ||`)

      const channel = client.channels.cache.find(channel => channel.id === config.base.baseannouncementschannelid)
      const messageArgs = args.join(' ');

      const newEmbed = new Discord.MessageEmbed()
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
        message.delete();
      });



      const consolemsg = `${message.author.username} announced something (channel): || ${messageArgs} ||`
      console.log(consolemsg);
    } catch(err) {
      console.log(err)
      message.channel.send(`Error executing command. EC:`)
    }
  },
};