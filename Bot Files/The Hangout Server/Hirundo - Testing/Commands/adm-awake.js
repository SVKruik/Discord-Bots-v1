// Bot check.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "awake",
    aliases: config.aliases.aliasesawake,
    cooldown: config.cooldown.cooldownawake,
    permissions: config.permissions.permissionawake,
    description: "Checks if the bot can respond to something basic.",
    async execute(message, args, cmd, client, Discord) {
        try {
            const list = ["Yep!", "Here!", "Ready!", "Awake!", "I'm here!", "Yes!", "Yeah!"];
            const random = list[Math.floor(Math.random() * list.length)];
            message.channel.send({ content: random });
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
        }
    },
};
