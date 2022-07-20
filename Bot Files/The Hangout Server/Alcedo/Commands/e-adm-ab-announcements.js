const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "bigannouncements",
    aliases: config.aliases.aliasesabannouncements,
    cooldown: config.cooldown.cooldownannouncements,
    permissions: config.permissions.permissionannouncements,
    description: "Announce something using the bot.",
    async execute(message, args, cmd, client, Discord) {
    },
};
