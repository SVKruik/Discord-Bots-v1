const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "levelstatistics",
    aliases: config.aliases.aliaseslevelstats,
    cooldown: config.cooldown.cooldownlevelstats,
    permissions: config.permissions.permissionlevelstats,
    description: "Displays your current server level and experience.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
