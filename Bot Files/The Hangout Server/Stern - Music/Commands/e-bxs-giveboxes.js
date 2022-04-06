const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "giveboxes",
    aliases: config.aliases.aliasesgiveboxes,
    cooldown: config.cooldown.cooldowngiveboxes,
    permissions: config.permissions.permissiongiveboxes,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
