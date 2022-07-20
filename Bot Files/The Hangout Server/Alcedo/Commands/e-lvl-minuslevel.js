const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "minuslevel",
    aliases: config.aliases.aliasesminuslevel,
    cooldown: config.cooldown.cooldownminuslevel,
    permissions: config.permissions.permissionminuslevel,
    description: "Current - amount (level).",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
