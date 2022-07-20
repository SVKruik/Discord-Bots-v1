const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "shards",
    aliases: config.aliases.aliasesshards,
    cooldown: config.cooldown.cooldownshards,
    permissions: config.permissions.permissionshards,
    description: "Displays your current shards.",
    execute(message, args, cmd, client, Discord, profileData) {
    },
};
