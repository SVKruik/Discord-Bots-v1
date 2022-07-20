const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "givewarnings",
    aliases: config.aliases.aliasesgivewarnings,
    cooldown: config.cooldown.cooldowngivewarnings,
    permissions: config.permissions.permissiongivewarnings,
    description: "Give someone a warning.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
