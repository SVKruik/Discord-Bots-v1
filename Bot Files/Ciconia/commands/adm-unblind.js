// Unblind iemand. Persoon is weer terug.

const config = require("../other/config.js");

module.exports = {
    name: "unblind",
    aliases: config.aliases.aliasesunblind,
    cooldown: config.cooldown.cooldownunblind,
    permissions: config.permissions.permissionunblind,
    description: "This command unblinds members.",
    execute(message, args, cmd, client, Discord) {
        try {
            const target = message.mentions.users.first();
            if (target) {
                const blindRole = message.guild.roles.cache.find( // rol die je weggehaald wordt
                    (role) => role.id === config.base.baseblindrole
                );
                const memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(blindRole);
                message.channel.send(
                    `<@${memberTarget.user.id}> has been succesfully unblinded. Welcome back!`
                );
            } else {
                message.channel.send(config.basemessages.messagesfinderror);
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err14}\`.`) // Error Systeem
        }
    },
};
