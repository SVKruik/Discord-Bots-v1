const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "steenpapierschaar",
    aliases: config.aliases.aliasesrpsnl,
    cooldown: config.cooldown.cooldownrpsnl,
    permissions: config.permissions.permissionrpsnl,
    description: "Steen, Papier, Schaar!",
    async execute(message, args, cmd, client, Discord) {
    },
};
