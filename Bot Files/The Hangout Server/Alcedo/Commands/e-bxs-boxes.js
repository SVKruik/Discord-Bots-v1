const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "boxes",
    aliases: config.aliases.aliasesboxes,
    cooldown: config.cooldown.cooldownboxes,
    permissions: config.permissions.permissionboxes,
    description: "Displays your current boxes.",
    execute(message, args, cmd, client, Discord, profileData) {
    },
};
