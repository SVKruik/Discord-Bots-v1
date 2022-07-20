const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "tradingset",
    aliases: config.aliases.aliasestradingset,
    cooldown: config.cooldown.cooldowntradingset,
    permissions: config.permissions.permissiontradingset,
    description: "Set the amount of materials.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
