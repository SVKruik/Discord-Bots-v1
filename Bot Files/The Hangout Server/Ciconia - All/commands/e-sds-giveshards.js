const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "giveshards",
    aliases: config.aliases.aliasesgiveshards,
    cooldown: config.cooldown.cooldowngiveshards,
    permissions: config.permissions.permissiongiveshards,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
