const config = require("../Other/config.js");

module.exports = {
    name: "unmute",
    aliases: config.aliases.aliasesunmute,
    cooldown: config.cooldown.cooldownunmute,
    permissions: config.permissions.permissionunmute,
    description: "This command unmutes members.",
    execute(message, args, cmd, client, Discord) {
    },
};
