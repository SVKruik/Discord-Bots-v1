const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "stakerockpaperscissor",
    aliases: config.aliases.aliasessrpsen,
    cooldown: config.cooldown.cooldownsrpsen,
    permissions: config.permissions.permissionsrpsen,
    description: "Rock, Paper Scissor!",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
