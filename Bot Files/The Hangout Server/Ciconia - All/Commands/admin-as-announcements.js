// Grote announcements. Hiermee stuur je in hetzelfde kanaal een bericht. De bot spreekt voor jouw. Dit kan alles zijn. 
// De 'A' staat er zodat hij samen met Big Announcements staat. 'S' staat voor big.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "smallannouncements",
    aliases: config.aliases.aliasesasannouncements,
    cooldown: config.cooldown.cooldownannouncements,
    permissions: config.permissions.permissionannouncements,
    description: "Announce something direct using the bot.",
    async execute(message, args, cmd, client, Discord) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
            const messageArgs = args.join(' '); // Alle args naar text

            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `**Heads up:**`,
                        value: `${messageArgs}`,
                    })
            message.channel.send({ embeds: [newEmbed] }).then((msg) => {
                message.delete();
            });

            const consolemsg = `${message.author.username} announced something (direct): || ${messageArgs} ||`
            console.log(consolemsg);
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err11}\`.`) // Error systeem
        }
    },
};