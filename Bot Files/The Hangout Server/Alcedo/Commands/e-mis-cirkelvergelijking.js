const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "cirkel",
    aliases: config.aliases.aliasescirkelvergelijking,
    cooldown: config.cooldown.cooldowncirkelvergelijking,
    permissions: config.permissions.permissioncirkelvergelijking,
    description: "Calculate a circle equation.",
    execute(message, args, cmd, client, Discord) {
    },
};
