const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "experience",
    aliases: config.aliases.aliasesexperience,
    cooldown: config.cooldown.cooldownexperience,
    permissions: config.permissions.permissionexperience,
    description: "Displays your current server experience.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
