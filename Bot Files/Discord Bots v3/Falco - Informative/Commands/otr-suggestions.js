// Stuur een suggestie in een dedicated kanaal. Mensen kunnen dan stemmen of dit een 
// goed idee is. Zo ja, dan implementeer ik het. Kan iets voor de bot of andere
// dingen zijn.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "suggestions",
    aliases: config.aliases.aliasessuggestions,
    cooldown: config.cooldown.cooldownsuggestions,
    permissions: config.permissions.permissionsuggestions,
    description: "Suggest something new in the dedicated channel.",
    async execute(message, args, cmd, client, Discord) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
            const channel = client.channels.cache.find(channel => channel.id === config.base.basesuggechannelid)
            const messageArgs = args.join(' '); // Alle args naar text

            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .addFields(
                    {
                        name: config.embeds.namesuggestions1,
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
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err11}\`.`) // Error systeem
        }
    },
};