const config = require("../Other/config");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "color",
    aliases: config.aliases.aliasescolor,
    cooldown: config.cooldown.cooldowncolor,
    permissions: config.permissions.permissioncolor,
    description: "Color command",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};