const config = require("../Other/config.js");

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
            console.log(`${message.author.username} used this command: || ${command.name} ||`)
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
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err0}\`.`)
        }
    },
};