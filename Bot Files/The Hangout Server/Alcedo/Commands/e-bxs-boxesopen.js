const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "boxesopen",
    aliases: config.aliases.aliasesboxesopen,
    cooldown: config.cooldown.cooldownboxesopen,
    permissions: config.permissions.permissionboxesopen,
    description: "Open a loot box for scraps.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};