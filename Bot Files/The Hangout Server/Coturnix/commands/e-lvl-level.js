const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "level",
    aliases: config.aliases.aliaseslevel,
    cooldown: config.cooldown.cooldownlevel,
    permissions: config.permissions.permissionlevel,
    description: "Displays your current server level.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
