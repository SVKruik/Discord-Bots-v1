const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "setlevel",
    aliases: config.aliases.aliasessetlevel,
    cooldown: config.cooldown.cooldownsetlevel,
    permissions: config.permissions.permissionsetlevel,
    description: "Reset the level of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
