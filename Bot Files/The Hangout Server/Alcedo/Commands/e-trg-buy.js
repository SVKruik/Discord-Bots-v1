const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "tradingbuy",
    aliases: config.aliases.aliasestradingbuy,
    cooldown: config.cooldown.cooldowntradingbuy,
    permissions: config.permissions.permissiontradingbuy,
    description: "Buy something on the market.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
