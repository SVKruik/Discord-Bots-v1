const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "slope",
    aliases: config.aliases.aliasestradingslope,
    cooldown: config.cooldown.cooldowntradingslope,
    permissions: config.permissions.permissiontradingslope,
    description: "Calculate the slope.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
