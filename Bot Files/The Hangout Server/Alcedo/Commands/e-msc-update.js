const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "update",
    aliases: config.aliases.aliasesupdate,
    cooldown: config.cooldown.cooldownmusic,
    permissions: config.permissions.permissionmusic,
    description: "Update your music library.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
