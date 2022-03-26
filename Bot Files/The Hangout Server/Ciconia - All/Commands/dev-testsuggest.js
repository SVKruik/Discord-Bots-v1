// Test suggestie. Kan je kijken hoe hij er uit ziet bij het sturen, of gewoon bug checken.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

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
            console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.

            const channel = client.channels.cache.find(channel => channel.id === config.base.basebottestingthreechannelid)
            const messageArgs = args.join(' '); // Alle args naar text
            let author = {
                name: message.author.tag,
                url: message.author.displayAvatarURL({ dynamic: true })
            }
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .setAuthor(author)
                .addFields(
                    {
                        name: config.embeds.namesuggestions1,
                        value: `${messageArgs}`,
                    })
                .setFooter({ text: config.embed.embedfooter });
            channel.send({ embeds: [newEmbed] }).then((msg) => {
                msg.react('👍');
                msg.react('👎');
                message.channel.send(`Test Suggestion sent in <#${config.base.basebottestingthreechannelid}>.`)
            });
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err11}\`.`) // Error systeem
        }
    },
};