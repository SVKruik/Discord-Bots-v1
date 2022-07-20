const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "reset",
    aliases: config.aliases.aliasesreset,
    cooldown: config.cooldown.cooldownmusic,
    permissions: config.permissions.permissionmusic,
    description: "Reset and clear all your songs stored in your library.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
