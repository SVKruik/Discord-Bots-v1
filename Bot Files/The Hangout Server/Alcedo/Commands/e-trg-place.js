const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "tradingplace",
    aliases: config.aliases.aliasestradingplace,
    cooldown: config.cooldown.cooldowntradingplace,
    permissions: config.permissions.permissiontradingplace,
    description: "Place an owned building on your board.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
