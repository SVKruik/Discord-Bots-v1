const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "cijfer",
    aliases: config.aliases.aliasescijfer,
    cooldown: config.cooldown.cooldowncijfer,
    permissions: config.permissions.permissioncijfer,
    description: "Calculate your note for a school test with the Dutch calc system.",
    async execute(message, args, cmd, client, Discord) {
    }
}