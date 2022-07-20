const config = require("../Other/config.js");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "clear",
    aliases: config.aliases.aliasesclear,
    cooldown: config.cooldown.cooldownclear,
    permissions: config.permissions.permissionclear,
    description: "Bulk delete messages.",
    async execute(message, args, cmd, client, Discord) {
    },
};
