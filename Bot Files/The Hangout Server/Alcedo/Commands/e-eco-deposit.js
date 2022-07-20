const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "deposit",
    aliases: config.aliases.aliasesdeposit,
    cooldown: config.cooldown.cooldowndeposit,
    permissions: config.permissions.permissiondeposit,
    description: "Deposit coins from your wallet to your bank.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
