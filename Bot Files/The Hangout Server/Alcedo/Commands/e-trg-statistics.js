const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradingstatistics",
    aliases: config.aliases.aliasestradingstatistics,
    cooldown: config.cooldown.cooldowntradingstatistics,
    permissions: config.permissions.permissiontradingstatistics,
    description: "Display your trading statistics.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
