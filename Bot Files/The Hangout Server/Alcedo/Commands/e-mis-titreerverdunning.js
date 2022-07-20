const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "titratieverdunning",
    aliases: config.aliases.aliasestitreerverdunning,
    cooldown: config.cooldown.cooldowntitreerverdunning,
    permissions: config.permissions.permissiontitreerverdunning,
    description: "Calculate some science math.",
    execute(message, args, cmd, client, Discord) {
    },
};
