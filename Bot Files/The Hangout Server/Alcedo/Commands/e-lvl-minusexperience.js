const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "minusexperience",
    aliases: config.aliases.aliasesminusexperience,
    cooldown: config.cooldown.cooldownminusexperience,
    permissions: config.permissions.permissionminusexperience,
    description: "Current - amount (level).",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
