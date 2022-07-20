const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "titratienormaal",
    aliases: config.aliases.aliasestitreernormaal,
    cooldown: config.cooldown.cooldowntitreernormaal,
    permissions: config.permissions.permissiontitreernormaal,
    description: "Calculate some science math.",
    execute(message, args, cmd, client, Discord) {
    },
};
