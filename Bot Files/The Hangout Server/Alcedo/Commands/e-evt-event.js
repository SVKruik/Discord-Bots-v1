const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "event",
    aliases: config.aliases.aliasesevent,
    cooldown: config.cooldown.cooldownevent,
    permissions: config.permissions.permissionevent,
    description: "Set up a event with teams.",
    async execute(message, args, cmd, client, Discord) {
    },
};
