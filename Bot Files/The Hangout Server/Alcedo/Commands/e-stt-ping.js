const config = require("../Other/config.js");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "ping",
    aliases: config.aliases.aliasesping,
    cooldown: config.cooldown.cooldownping,
    permissions: config.permissions.permissionping,
    description: "This silences spamming or naughty people. Can only read stuff.",
    execute(message, args, cmd, client, Discord) {
    },
};
