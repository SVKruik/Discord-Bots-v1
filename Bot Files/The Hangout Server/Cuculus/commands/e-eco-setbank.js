const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "setbank",
    aliases: config.aliases.aliasessetbank,
    cooldown: config.cooldown.cooldownsetbank,
    permissions: config.permissions.permissionsetbank,
    description: "Reset the balance of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
