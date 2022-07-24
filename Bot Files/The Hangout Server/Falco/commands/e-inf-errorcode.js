const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "errorcode",
    aliases: config.aliases.aliaseserrorcode,
    cooldown: config.cooldown.cooldownerrorcode,
    permissions: config.permissions.permissionerrorcode,
    description: "See what error code means what.",
    execute(message, args, cmd, client, Discord) {
    },
};
