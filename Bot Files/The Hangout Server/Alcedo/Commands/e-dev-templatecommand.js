const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "templatecommand",
    aliases: config.aliases.aliasestemplatecommand,
    cooldown: config.cooldown.cooldowntemplatecommand,
    permissions: config.permissions.permissiontemplatecommand,
    description: "Command template for devs.",
    async execute(message, args, cmd, client, Discord) {
    },
};
