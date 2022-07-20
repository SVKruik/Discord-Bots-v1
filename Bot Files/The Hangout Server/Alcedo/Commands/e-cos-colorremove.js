const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "colorremove",
    aliases: config.aliases.aliasescolorremove,
    cooldown: config.cooldown.cooldowncolorremove,
    permissions: config.permissions.permissioncolorremove,
    description: "Remove a color role by ID or name.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};