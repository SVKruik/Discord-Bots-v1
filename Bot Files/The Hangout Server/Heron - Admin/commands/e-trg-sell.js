const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradingsell",
    aliases: config.aliases.aliasestradingsell,
    cooldown: config.cooldown.cooldowntradingsell,
    permissions: config.permissions.permissiontradingsell,
    description: "Sell something to the market.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
