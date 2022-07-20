const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "givebank",
    aliases: config.aliases.aliasesgivebank,
    cooldown: config.cooldown.cooldowngivebank,
    permissions: config.permissions.permissiongivebank,
    description: "Increase the balance of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
