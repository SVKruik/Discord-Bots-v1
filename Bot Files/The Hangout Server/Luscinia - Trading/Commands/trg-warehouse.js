const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "warehouse",
    aliases: config.aliases.aliaseswarehouse,
    cooldown: config.cooldown.cooldownwarehouse,
    permissions: config.permissions.permissionwarehouse,
    description: "Check all your inventory of materials.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
