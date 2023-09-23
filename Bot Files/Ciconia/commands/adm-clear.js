// Bulk delete een bepaalde hoeveelheid berichten, zodat je het niet handmatig hoeft te doen.

const config = require("../other/config.js");

module.exports = {
    name: "clear",
    aliases: config.aliases.aliasesclear,
    cooldown: config.cooldown.cooldownclear,
    permissions: config.permissions.permissionclear,
    description: "Bulk delete messages.",
    async execute(message, args, cmd, client, Discord) {
        try {
            const max = config.commandclear.commandclearmax;
            const min = config.commandclear.commandclearmin;

            if (!args[0])
                return message.channel.send(config.commandclear.commandclearmissing); // Hoeveelheid missing
            if (isNaN(args[0])) return message.channel.send(config.basemessages.messagesrealnumber); // Mogen alleen nummers zijn

            if (args[0] > max)
                return message.channel.send(
                    `You cannot clear more than \`${max}\` messages in one command.` // Over limiet
                );
            if (args[0] < min) return message.channel.send(config.basemessages.messagesgreaterone); // Te klein

            await message.channel.messages
                .fetch({ limit: args[0] })
                .then((messages) => {
                    message.channel.bulkDelete(messages); // Verwijderen van berichten
                });
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err13}\`.`) // Error Systeem
        }
    },
};
