const config = require("../other/config.js"); // Vaste variabelen opgeslagen
const os = require('os');

module.exports = {
    name: "botstatistics",
    aliases: config.aliases.aliasesbotstats,
    cooldown: config.cooldown.cooldownbotstats,
    permissions: config.permissions.permissionbotstats,
    description: "Displays all stats of the bot.",
    async execute(message, args, cmd, client, Discord) {
    },
};
