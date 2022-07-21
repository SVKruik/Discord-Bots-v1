const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "warnings",
    aliases: config.aliases.aliaseswarnings,
    cooldown: config.cooldown.cooldownwarnings,
    permissions: config.permissions.permissionwarnings,
    description: "Display your warning count.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
