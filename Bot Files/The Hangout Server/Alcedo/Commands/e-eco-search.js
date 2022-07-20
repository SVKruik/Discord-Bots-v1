const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "search",
    aliases: config.aliases.aliasessearch,
    cooldown: config.cooldown.cooldownsearch,
    permissions: config.permissions.permissionsearch,
    description: "Search for some coins. Kinda a second daily reward.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
