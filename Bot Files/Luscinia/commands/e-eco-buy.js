const config = require("../other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "buy",
    aliases: config.aliases.aliasesbuy,
    cooldown: config.cooldown.cooldownbuy,
    permissions: config.permissions.permissionbuy,
    description: "Buy stuff for coins.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
