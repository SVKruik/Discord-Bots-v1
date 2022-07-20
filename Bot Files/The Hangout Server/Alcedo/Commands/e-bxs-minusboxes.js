const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "giveboxes",
    aliases: config.aliases.aliasesgiveboxes,
    cooldown: config.cooldown.cooldowngiveboxes,
    permissions: config.permissions.permissiongiveboxes,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
