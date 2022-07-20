const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "sell",
    aliases: config.aliases.aliasessell,
    cooldown: config.cooldown.cooldownsell,
    permissions: config.permissions.permissionsell,
    description: "Sell stuff for coins.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
