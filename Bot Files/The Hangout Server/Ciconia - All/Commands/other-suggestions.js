const config = require("./../Other/config.js");

module.exports = {
    name: "suggestions",
    aliases: config.aliases.aliasessuggestions,
    cooldown: config.cooldown.cooldownsuggestions,
    permissions: config.permissions.permissionsuggestions,
    description: "Suggest something new in the dedicated channel.",
    async execute(message, args, cmd, client, Discord) {
        const channel = client.channels.cache.find(channel => channel.id === config.base.basesuggechannelid)
        const messageArgs = args.join(' ');

        const newEmbed = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .addFields(
                {
                    name: `**New Suggestion**`,
                    value: `${messageArgs}`,
                })
            .setFooter(config.embed.embedfooter);
        channel.send(newEmbed).then((msg) => {
            msg.react('👍');
            msg.react('👎');
            message.delete();
        });

        const consolemsg = `${message.author.username} suggested something new: || ${messageArgs} ||`
        console.log(consolemsg);
    },
};