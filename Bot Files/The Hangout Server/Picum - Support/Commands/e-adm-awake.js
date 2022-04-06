const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "awake",
    aliases: config.aliases.aliasesawake,
    cooldown: config.cooldown.cooldownawake,
    permissions: config.permissions.permissionawake,
    description: "Checks if the bot can respond to something basic.",
    async execute(message, args, cmd, client, Discord) {
    },
};
