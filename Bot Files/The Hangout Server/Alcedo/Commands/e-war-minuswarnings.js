const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "minuswarnings",
    aliases: config.aliases.aliasesminuswarnings,
    cooldown: config.cooldown.cooldownminuswarnings,
    permissions: config.permissions.permissionminuswarnings,
    description: "Decrease the amount of warnings.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
