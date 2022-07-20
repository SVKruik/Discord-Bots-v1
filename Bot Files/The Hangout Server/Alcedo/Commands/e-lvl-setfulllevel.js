const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "setlevelandexperience",
    aliases: config.aliases.aliasessetfulllevel,
    cooldown: config.cooldown.cooldownsetfulllevel,
    permissions: config.permissions.permissionsetfulllevel,
    description: "Reset the level and experience of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
