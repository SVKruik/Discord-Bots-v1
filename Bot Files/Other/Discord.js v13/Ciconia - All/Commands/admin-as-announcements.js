const config = require("../Other/config.js");

module.exports = {
    name: "smallannouncements",
    aliases: config.aliases.aliasesasannouncements,
    cooldown: config.cooldown.cooldownannouncements,
    permissions: config.permissions.permissionannouncements,
    description: "Announce something direct using the bot.",
    async execute(message, args, cmd, client, Discord) {
        const messageArgs = args.join(' ');

        const embed = new MessageEmbed()
            .setColor(config.base.basecolor)
            .addFields(
                {
                    name: `**Heads up:**`,
                    value: `${messageArgs}`,
                })
        message.channel.send({ embeds: [ embed ]}).then((msg) => {
            message.delete();
        });

        const consolemsg = `${message.author.username} announced something (direct): || ${messageArgs} ||`
        console.log(consolemsg);
    },
};