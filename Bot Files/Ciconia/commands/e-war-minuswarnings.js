const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "minuswarnings",
    aliases: config.aliases.aliasesminuswarnings,
    cooldown: config.cooldown.cooldownminuswarnings,
    permissions: config.permissions.permissionminuswarnings,
    description: "Decrease the amount of warnings.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
