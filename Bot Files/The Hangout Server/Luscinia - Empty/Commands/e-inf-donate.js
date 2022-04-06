const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "donate",
    aliases: config.aliases.aliasesdonate,
    cooldown: config.cooldown.cooldowndonate,
    permissions: config.permissions.permissiondonate,
    description: "Support our project by donating to us.",
    execute(message, args, cmd, client, Discord) {
    },
};
