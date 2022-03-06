const config = require("../Other/config.js");

module.exports = {
    name: "testsuggestions",
    aliases: config.aliases.aliasestestsuggest,
    cooldown: config.cooldown.cooldowntestsuggest,
    permissions: config.permissions.permissiontestsuggest,
    description: "Test suggest something new in the dedicated channel.",
    async execute(message, args, cmd, client, Discord) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`)

            const channel = client.channels.cache.find(channel => channel.id === config.base.basebottestingthreechannelid)
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
                message.channel.send(`Test Suggestion sent in <#${config.base.basetestsuggestchannelid}>.`)
            });
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err0}\`.`)
        }
    },
};