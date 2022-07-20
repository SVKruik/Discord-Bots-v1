const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "kopofmunt",
    aliases: config.aliases.aliasesflipacoinnl,
    cooldown: config.cooldown.cooldownflipacoinnl,
    permissions: config.permissions.permissionflipacoinnl,
    description: "Kop of munt!",
    async execute(message, args, cmd, client, Discord) {
    },
};
