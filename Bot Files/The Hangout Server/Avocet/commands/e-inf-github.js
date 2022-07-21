const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "github",
    aliases: config.aliases.aliasesgithub,
    cooldown: config.cooldown.cooldowngithub,
    permissions: config.permissions.permissiongithub,
    description: "Displays all import links to our GitHub repository.",
    execute(message, args, cmd, client, Discord) {
    },
};
