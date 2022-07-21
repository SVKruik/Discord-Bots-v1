const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "hoeklijn",
    aliases: config.aliases.aliaseshoeklijn,
    cooldown: config.cooldown.cooldownhoeklijn,
    permissions: config.permissions.permissionhoeklijn,
    description: "Calculate difference in degrees between 2 lines.",
    execute(message, args, cmd, client, Discord) {
    },
};
