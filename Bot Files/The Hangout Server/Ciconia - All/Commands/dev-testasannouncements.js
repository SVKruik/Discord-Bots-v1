const config = require("../Other/config.js");

module.exports = {
    name: "testsmallannouncements",
    aliases: config.aliases.aliasestestasannouncements,
    cooldown: config.cooldown.cooldowntestannouncements,
    permissions: config.permissions.permissiontestannouncements,
    description: "Test announce something direct using the bot.",
    async execute(message, args, cmd, client, Discord, profileData) {
        const messageArgs = args.join(' ');

        const newEmbed = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .addFields(
                {
                    name: `**Heads up:**`,
                    value: `${messageArgs}`,
                })
        message.channel.send(newEmbed)
    },
};