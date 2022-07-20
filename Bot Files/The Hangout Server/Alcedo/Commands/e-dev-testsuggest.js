const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "testsuggestions",
    aliases: config.aliases.aliasestestsuggest,
    cooldown: config.cooldown.cooldowntestsuggest,
    permissions: config.permissions.permissiontestsuggest,
    description: "Test suggest something new in the dedicated channel.",
    async execute(message, args, cmd, client, Discord) {
    },
};
