const config = require("../other/config.js");

module.exports = {
    name: "unblind",
    aliases: config.aliases.aliasesunblind,
    cooldown: config.cooldown.cooldownunblind,
    permissions: config.permissions.permissionunblind,
    description: "This command unblinds members.",
    execute(message, args, cmd, client, Discord) {
    },
};
