const config = require("../Other/config.js");

module.exports = {
    name: "smallannouncements",
    aliases: config.aliases.aliasesasannouncements,
    cooldown: config.cooldown.cooldownannouncements,
    permissions: config.permissions.permissionannouncements,
    description: "Announce something using the bot.",
    async execute(message, args, cmd, client, Discord) {
        const messageArgs = args.join(' ');

        const newEmbed = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .addFields(
                {
                    name: `**Heads up:**`,
                    value: `${messageArgs}`,
                })
        message.channel.send(newEmbed).then((msg) => {
            message.delete();
        });

        const consolemsg = `${message.author.username} announced something (direct): || ${messageArgs} ||`
        console.log(consolemsg);
    },
};