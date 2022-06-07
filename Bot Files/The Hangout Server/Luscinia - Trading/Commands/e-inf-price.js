const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "price",
    aliases: config.aliases.aliasesprice,
    cooldown: config.cooldown.cooldownprice,
    permissions: config.permissions.permissionprice,
    description: "Embed template for devs.",
    execute(message, args, cmd, client, Discord) {
    },
};
