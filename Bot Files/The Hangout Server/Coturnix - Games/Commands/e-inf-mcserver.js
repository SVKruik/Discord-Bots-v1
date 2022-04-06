const util = require("minecraft-server-util");
const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "minecraftserver",
    aliases: config.aliases.aliasesmcserver,
    cooldown: config.cooldown.cooldownmcserver,
    permissions: config.permissions.permissionmcserver,
    description: "Displays some Minecraft server statistics.",
    execute(message, args, cmd, client, Discord) {
    },
};
