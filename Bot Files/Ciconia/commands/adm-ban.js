// Verban iemand uit de Discord server.

const config = require("../other/config.js");

module.exports = {
    name: "ban",
    aliases: config.aliases.aliasesban,
    cooldown: config.cooldown.cooldownban,
    permissions: config.permissions.permissionban,
    description: "config.descriptionban",
    execute(message, args, cmd, client, Discord) {
        try {
            const target = message.mentions.users.first();
            const username = message.client.user.username;
            const reason1 = args.join(' ');
            if (!args[1]) {
                return message.channel.send("Please also specify for what reason you would like to ban this member.")
            }
            const reason = reason1.charAt(0).toUpperCase() + reason1.slice(1);

            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                console.log(
                    `${memberTarget.user.username} got banned because of: ${reason}. This was done by ${message.author.username} using ${username}.`
                );
                message.channel.send(
                    `<@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason}.`
                );
            } else {
                message.channel.send(config.basemessages.messageserror);
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err12}\`.`) // Error Systeem
        }
    },
};