const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradingminus",
    aliases: config.aliases.aliasestradingminus,
    cooldown: config.cooldown.cooldowntradingminus,
    permissions: config.permissions.permissiontradingminus,
    description: "Decrease the amount of materials.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
