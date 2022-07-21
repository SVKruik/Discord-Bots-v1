const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradingmove",
    aliases: config.aliases.aliasestradingmove,
    cooldown: config.cooldown.cooldowntradingmove,
    permissions: config.permissions.permissiontradingmove,
    description: "Move a building to a different place.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
