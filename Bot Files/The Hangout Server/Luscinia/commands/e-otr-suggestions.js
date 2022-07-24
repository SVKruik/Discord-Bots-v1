const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "suggestions",
    aliases: config.aliases.aliasessuggestions,
    cooldown: config.cooldown.cooldownsuggestions,
    permissions: config.permissions.permissionsuggestions,
    description: "Suggest something new in the dedicated channel.",
    async execute(message, args, cmd, client, Discord) {
    },
};
