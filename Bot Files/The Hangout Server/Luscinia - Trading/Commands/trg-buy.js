// Koop iets op de markt.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const fs = require("fs");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradingbuy",
    aliases: config.aliases.aliasestradingbuy,
    cooldown: config.cooldown.cooldowntradingbuy,
    permissions: config.permissions.permissiontradingbuy,
    description: "Buy something on the market.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
