const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "templatecommand",
    aliases: config.aliases.aliasestemplateembed,
    cooldown: config.cooldown.cooldowntemplateembed,
    permissions: config.permissions.permissiontemplatecommand,
    description: "Embed template for devs.",
    execute(message, args, cmd, client, Discord) {
    },
};
