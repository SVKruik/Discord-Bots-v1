const ms = require("ms");
const config = require("../Other/config.js");

module.exports = {
    name: "mute",
    aliases: config.aliases.aliasesmute,
    cooldown: config.cooldown.cooldownmute,
    permissions: config.permissions.permissionmute,
    description: "This silences spamming or naughty people. Can only read stuff.",
    execute(message, args, cmd, client, Discord) {
    },
};
