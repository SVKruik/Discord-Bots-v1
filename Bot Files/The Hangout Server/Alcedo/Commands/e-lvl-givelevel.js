const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "givelevel",
    aliases: config.aliases.aliasesgivelevel,
    cooldown: config.cooldown.cooldowngivelevel,
    permissions: config.permissions.permissiongivelevel,
    description: "Give a player extra levels.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
