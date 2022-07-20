const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "smallannouncements",
    aliases: config.aliases.aliasesasannouncements,
    cooldown: config.cooldown.cooldownannouncements,
    permissions: config.permissions.permissionannouncements,
    description: "Announce something direct using the bot.",
    async execute(message, args, cmd, client, Discord) {
    },
};
