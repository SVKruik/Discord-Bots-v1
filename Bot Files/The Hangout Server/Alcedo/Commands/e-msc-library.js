const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "musiclibrary",
    aliases: config.aliases.aliasesmusiclibrary,
    cooldown: config.cooldown.cooldownmusic,
    permissions: config.permissions.permissionmusic,
    description: "Show your music library for quick access of your favorite songs.",
    execute(message, args, cmd, client, Discord, profileData) {
    },
};
