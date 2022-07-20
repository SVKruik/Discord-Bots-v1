const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "scraps",
    aliases: config.aliases.aliasesscraps,
    cooldown: config.cooldown.cooldownscraps,
    permissions: config.permissions.permissionscraps,
    description: "Displays your current scraps.",
    execute(message, args, cmd, client, Discord, profileData) {
    },
};
