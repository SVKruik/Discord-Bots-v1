const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "flipacoin",
    aliases: config.aliases.aliasesflipacoinen,
    cooldown: config.cooldown.cooldownflipacoinen,
    permissions: config.permissions.permissionflipacoinen,
    description: "Flip a coin!",
    async execute(message, args, cmd, client, Discord) {
    },
};
