const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "shop",
    aliases: config.aliases.aliasesshop,
    cooldown: config.cooldown.cooldownshop,
    permissions: config.permissions.permissionshop,
    description: "Displays all the items for sale.",
    execute(message, args, cmd, client, Discord) {
    },
};
