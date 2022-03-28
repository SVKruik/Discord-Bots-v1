const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "giveexperience",
    aliases: config.aliases.aliasesgiveexperience,
    cooldown: config.cooldown.cooldowngiveexperience,
    permissions: config.permissions.permissiongiveexperience,
    description: "Give a player extra levels.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
