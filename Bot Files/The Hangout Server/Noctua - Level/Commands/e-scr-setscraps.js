const config = require("../other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "setscraps",
    aliases: config.aliases.aliasessetscraps,
    cooldown: config.cooldown.cooldownsetscraps,
    permissions: config.permissions.permissionsetscraps,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
