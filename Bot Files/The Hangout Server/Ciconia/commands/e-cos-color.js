const config = require("../other/config");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "color",
    aliases: config.aliases.aliasescolor,
    cooldown: config.cooldown.cooldowncolor,
    permissions: config.permissions.permissioncolor,
    description: "Color command",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};