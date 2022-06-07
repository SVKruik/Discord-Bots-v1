const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "givebankandwallet",
    aliases: config.aliases.aliasesgivefulleco,
    cooldown: config.cooldown.cooldowngivefulleco,
    permissions: config.permissions.permissiongivefulleco,
    description: "Increase the balance of both the bank and wallet account.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
