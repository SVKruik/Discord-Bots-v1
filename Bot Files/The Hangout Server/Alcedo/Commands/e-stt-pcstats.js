const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const os = require('os');

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "pcstatistics",
    aliases: config.aliases.aliasespcstats,
    cooldown: config.cooldown.cooldownpcstats,
    permissions: config.permissions.permissionpcstats,
    description: "Displays all stats of the host pc.",
    async execute(message, args, cmd, client, Discord) {
    },
};
