const config = require("../Other/config.js");

module.exports = {
    name: "uptime",
    aliases: config.aliases.aliasesuptime,
    cooldown: config.cooldown.cooldownuptime,
    permissions: config.permissions.permissionuptime,
    description: "Check the uptime of the bot.",
    execute(message, args, cmd, client, Discord) {
    },
};
