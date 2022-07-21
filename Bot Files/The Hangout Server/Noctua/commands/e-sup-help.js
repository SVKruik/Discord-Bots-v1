const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "help",
    aliases: config.aliases.aliaseshelp,
    cooldown: config.cooldown.cooldownhelp,
    permissions: config.permissions.permissionhelp,
    description: "Advanced Help - Stage 1",
    async execute(message, args, cmd, client, Discord) {
    },
};
