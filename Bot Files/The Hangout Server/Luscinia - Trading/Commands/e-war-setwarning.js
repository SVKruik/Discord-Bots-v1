const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "setwarnings",
    aliases: config.aliases.aliasessetwarnings,
    cooldown: config.cooldown.cooldownsetwarnings,
    permissions: config.permissions.permissionsetwarnings,
    description: "Reset the balance of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
