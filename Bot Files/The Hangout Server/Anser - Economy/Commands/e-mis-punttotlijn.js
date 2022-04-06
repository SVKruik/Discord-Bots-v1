const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "punttotlijn",
    aliases: config.aliases.aliasespunttotlijn,
    cooldown: config.cooldown.cooldownpunttotlijn,
    permissions: config.permissions.permissionpunttotlijn,
    description: "Calculate distance between a point and a line.",
    execute(message, args, cmd, client, Discord) {
    },
};
