const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradingtrade",
    aliases: config.aliases.aliasestradingtrade,
    cooldown: config.cooldown.cooldowntradingtrade,
    permissions: config.permissions.permissiontradingtrade,
    description: "Trade with someone.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
