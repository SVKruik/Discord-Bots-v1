const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "giveshards",
    aliases: config.aliases.aliasesgiveshards,
    cooldown: config.cooldown.cooldowngiveshards,
    permissions: config.permissions.permissiongiveshards,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
