const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "minusbank",
    aliases: config.aliases.aliasesminusbank,
    cooldown: config.cooldown.cooldownminusbank,
    permissions: config.permissions.permissionminusbank,
    description: "Current - amount (bank).",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
