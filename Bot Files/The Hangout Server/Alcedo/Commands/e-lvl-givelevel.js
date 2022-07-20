const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "givelevel",
    aliases: config.aliases.aliasesgivelevel,
    cooldown: config.cooldown.cooldowngivelevel,
    permissions: config.permissions.permissiongivelevel,
    description: "Give a player extra levels.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
