const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "setwallet",
    aliases: config.aliases.aliasessetwallet,
    cooldown: config.cooldown.cooldownsetwallet,
    permissions: config.permissions.permissionsetwallet,
    description: "Reset the balance of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
