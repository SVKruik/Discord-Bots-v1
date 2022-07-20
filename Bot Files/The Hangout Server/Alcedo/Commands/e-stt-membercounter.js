const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "membercount",
    aliases: config.aliases.aliasesmembercount,
    cooldown: config.cooldown.cooldownmembercount,
    permissions: config.permissions.permissionmembercount,
    description: "Embed template for devs.",
    execute(message, args, cmd, client, Discord) {
    },
};
