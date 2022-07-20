const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "givewallet",
    aliases: config.aliases.aliasesgivewallet,
    cooldown: config.cooldown.cooldowngivewallet,
    permissions: config.permissions.permissiongivewallet,
    description: "Increase the balance of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
