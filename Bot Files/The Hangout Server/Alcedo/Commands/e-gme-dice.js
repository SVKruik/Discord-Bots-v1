const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "dice",
    aliases: config.aliases.aliasesdice,
    cooldown: config.cooldown.cooldowndice,
    permissions: config.permissions.permissiondice,
    description: "Roll the dice!",
    async execute(message, args, cmd, client, Discord) {
    },
};
