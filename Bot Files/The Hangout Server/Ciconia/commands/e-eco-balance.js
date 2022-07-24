const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "balance",
    aliases: config.aliases.aliasesbalance,
    cooldown: config.cooldown.cooldownbalance,
    permissions: config.permissions.permissionbalance,
    description: "Display both your wallet and bank balance.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
