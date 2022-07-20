const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "rockpaperscissor",
    aliases: config.aliases.aliasesrpsen,
    cooldown: config.cooldown.cooldownrpsen,
    permissions: config.permissions.permissionrpsen,
    description: "Rock, Paper Scissor!",
    async execute(message, args, cmd, client, Discord) {
    },
};
