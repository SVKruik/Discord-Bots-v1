const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "ticket",
    aliases: config.aliases.aliasesticket,
    cooldown: config.cooldown.cooldownticket,
    permissions: config.permissions.permissionticket,
    description: "open a support ticket!",
    async execute(message, args, cmd, client, Discord) {
    },
};
