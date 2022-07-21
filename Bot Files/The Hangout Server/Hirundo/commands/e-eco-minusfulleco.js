const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "minusbankandwallet",
    aliases: config.aliases.aliasesminusfulleco,
    cooldown: config.cooldown.cooldownminusfulleco,
    permissions: config.permissions.permissionminusfulleco,
    description: "Decrease the balance of both accounts.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
