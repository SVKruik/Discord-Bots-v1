const math = require("mathjs");
const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "mathematics",
    aliases: config.aliases.aliasesmath,
    cooldown: config.cooldown.cooldownmath,
    permissions: config.permissions.permissionmath,
    description: "Basic calculation.",
    execute(message, args, cmd, client, Discord) {
    },
};
