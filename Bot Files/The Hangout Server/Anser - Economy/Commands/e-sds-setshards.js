const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "setshards",
    aliases: config.aliases.aliasessetshards,
    cooldown: config.cooldown.cooldownsetshards,
    permissions: config.permissions.permissionsetshards,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
