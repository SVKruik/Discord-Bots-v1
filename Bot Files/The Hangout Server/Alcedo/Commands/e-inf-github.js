const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "github",
    aliases: config.aliases.aliasesgithub,
    cooldown: config.cooldown.cooldowngithub,
    permissions: config.permissions.permissiongithub,
    description: "Displays all import links to our GitHub repository.",
    execute(message, args, cmd, client, Discord) {
    },
};
