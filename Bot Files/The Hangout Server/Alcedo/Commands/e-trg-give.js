const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradinggive",
    aliases: config.aliases.aliasestradinggive,
    cooldown: config.cooldown.cooldowntradinggive,
    permissions: config.permissions.permissiontradinggive,
    description: "Give someone materials.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
