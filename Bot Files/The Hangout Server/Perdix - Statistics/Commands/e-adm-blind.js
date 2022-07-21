const ms = require("ms");
const config = require("../other/config.js");

module.exports = {
    name: "blind",
    aliases: config.aliases.aliasesblind,
    cooldown: config.cooldown.cooldownblind,
    permissions: config.permissions.permissionblind,
    description: "Completly blind a member. Target cannot do anything.",
    execute(message, args, cmd, client, Discord) {
    },
};
