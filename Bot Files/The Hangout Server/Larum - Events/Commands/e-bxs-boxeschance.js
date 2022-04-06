const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "boxeschance",
    aliases: config.aliases.aliasesboxeschance,
    cooldown: config.cooldown.cooldownboxeschance,
    permissions: config.permissions.permissionboxeschance,
    description: "Displays your current boxes.",
    execute(message, args, cmd, client, Discord, profileData) {
    },
};
