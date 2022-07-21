const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "testsmallannouncements",
    aliases: config.aliases.aliasestestasannouncements,
    cooldown: config.cooldown.cooldowntestannouncements,
    permissions: config.permissions.permissiontestannouncements,
    description: "Test announce something direct using the bot.",
    async execute(message, args, cmd, client, Discord) {
    },
};
