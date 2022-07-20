const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "withdraw",
    aliases: config.aliases.aliaseswithdraw,
    cooldown: config.cooldown.cooldownwithdraw,
    permissions: config.permissions.permissionwithdraw,
    description: "Bank to Wallet",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
