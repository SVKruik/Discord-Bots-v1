const config = require("../Other/config.js");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "ban",
    aliases: config.aliases.aliasesban,
    cooldown: config.cooldown.cooldownban,
    permissions: config.permissions.permissionban,
    description: "config.descriptionban",
    execute(message, args, cmd, client, Discord) {
    },
};
