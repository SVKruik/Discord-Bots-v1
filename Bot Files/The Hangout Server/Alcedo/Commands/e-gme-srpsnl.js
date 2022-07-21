const config = require("../other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "inlegsteenpapierschaar",
    aliases: config.aliases.aliasessrpsnl,
    cooldown: config.cooldown.cooldownsrpsnl,
    permissions: config.permissions.permissionsrpsnl,
    description: "Steen, Papier, Schaar, maar met inleg!",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
