const math = require("mathjs");
const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "mathematics",
    aliases: config.aliases.aliasesmath,
    cooldown: config.cooldown.cooldownmath,
    permissions: config.permissions.permissionmath,
    description: "Basic calculation.",
    execute(message, args, cmd, client, Discord) {
    },
};
