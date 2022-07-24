const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "minuslevelandexperience",
    aliases: config.aliases.aliasesminusfulllevel,
    cooldown: config.cooldown.cooldownminusfulllevel,
    permissions: config.permissions.permissionminusfulllevel,
    description: "Decrease the experience and level.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
