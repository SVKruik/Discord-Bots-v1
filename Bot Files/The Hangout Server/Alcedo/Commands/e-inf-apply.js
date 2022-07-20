const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "apply",
    aliases: config.aliases.aliasesapply,
    cooldown: config.cooldown.cooldownapply,
    permissions: config.permissions.permissionapply,
    description: "Sends you the link where you can apply to one of our roles/ranks.",
    async execute(message, args, cmd, client, Discord) {
    },
};
