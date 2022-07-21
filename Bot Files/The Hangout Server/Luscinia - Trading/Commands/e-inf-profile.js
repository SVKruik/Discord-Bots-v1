const config = require("../other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "profile",
    aliases: config.aliases.aliasesprofile,
    cooldown: config.cooldown.cooldownprofile,
    permissions: config.permissions.permissionprofile,
    description: "Displays all information we have about you.",
    execute(message, args, cmd, client, Discord, profileData) {
    },
};
