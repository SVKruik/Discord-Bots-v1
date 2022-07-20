const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "givescraps",
    aliases: config.aliases.aliasesgivescraps,
    cooldown: config.cooldown.cooldowngivescraps,
    permissions: config.permissions.permissiongivescraps,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
