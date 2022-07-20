const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "testbigannouncements",
    aliases: config.aliases.aliasestestabannouncements,
    cooldown: config.cooldown.cooldowntestannouncements,
    permissions: config.permissions.permissiontestannouncements,
    description: "Test announce something using the bot.",
    async execute(message, args, cmd, client, Discord) {
    },
};
