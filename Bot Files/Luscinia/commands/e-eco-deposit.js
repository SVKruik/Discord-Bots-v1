const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "deposit",
    aliases: config.aliases.aliasesdeposit,
    cooldown: config.cooldown.cooldowndeposit,
    permissions: config.permissions.permissiondeposit,
    description: "Deposit coins from your wallet to your bank.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
