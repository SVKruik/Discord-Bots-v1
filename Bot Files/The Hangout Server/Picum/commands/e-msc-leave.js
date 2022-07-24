const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "leave",
    aliases: config.aliases.aliasesleave,
    cooldown: config.cooldown.cooldownleave,
    permissions: config.permissions.permissionmusic,
    description: "Stop the music, and leave the call.",
    async execute(message, args, cmd, client, Discord) {
    },
};
