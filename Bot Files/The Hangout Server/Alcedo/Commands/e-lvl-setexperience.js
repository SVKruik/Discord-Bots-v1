const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "setexperience",
    aliases: config.aliases.aliasessetexperience,
    cooldown: config.cooldown.cooldownsetexperience,
    permissions: config.permissions.permissionsetexperience,
    description: "Reset the amount of experience of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
