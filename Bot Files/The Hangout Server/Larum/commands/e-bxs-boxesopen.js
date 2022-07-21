const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "boxesopen",
    aliases: config.aliases.aliasesboxesopen,
    cooldown: config.cooldown.cooldownboxesopen,
    permissions: config.permissions.permissionboxesopen,
    description: "Open a loot box for scraps.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};