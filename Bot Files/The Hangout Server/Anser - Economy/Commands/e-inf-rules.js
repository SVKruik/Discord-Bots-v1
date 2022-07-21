const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "rules",
    aliases: config.aliases.aliasesrules,
    cooldown: config.cooldown.cooldownrules,
    permissions: config.permissions.permissionrules,
    description: "Displays an embed with our active server rules.",
    execute(message, args, cmd, client, Discord) {
    },
};
