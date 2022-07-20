const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "givelevelandexperience",
    aliases: config.aliases.aliasesgivefulllevel,
    cooldown: config.cooldown.cooldowngivefulllevel,
    permissions: config.permissions.permissiongivefulllevel,
    description: "Give a player extra levels and experience.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
