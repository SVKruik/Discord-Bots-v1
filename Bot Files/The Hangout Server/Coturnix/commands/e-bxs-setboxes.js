const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "setboxes",
    aliases: config.aliases.aliasessetboxes,
    cooldown: config.cooldown.cooldownsetboxes,
    permissions: config.permissions.permissionsetboxes,
    description: "Set the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
