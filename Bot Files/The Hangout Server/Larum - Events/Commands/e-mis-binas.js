const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "binas",
    aliases: config.aliases.aliasesbinas,
    cooldown: config.cooldown.cooldownbinas,
    permissions: config.permissions.permissionbinas,
    description: "Display information about a science book: Binas.",
    execute(message, args, cmd, client, Discord) {
    },
};
