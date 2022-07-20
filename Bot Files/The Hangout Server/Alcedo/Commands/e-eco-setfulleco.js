const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "setwalletandbank",
    aliases: config.aliases.aliasessetfulleco,
    cooldown: config.cooldown.cooldownsetfulleco,
    permissions: config.permissions.permissionsetfulleco,
    description: "Reset the balance of both accounts of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
