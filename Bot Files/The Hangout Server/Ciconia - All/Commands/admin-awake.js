// Check wie er allemaal wakker is. Als ik meerdere bots aan heb, kan ik kijken wie er allemaal reageren.
// Voor admin omdat je hier mee kan spammen.
// Als een bot niet reageert, betekent dat er een fatale fout in de code zit, waardoor hij helemaal niet kan reageren.
// Vroeger had ik de command `ping` voor dit doeleinde, maar die laat nu echt de ping van de bot en API zien.

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
            message.channel.send(random);
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${ config.errorcodes.err16}\`.`)
        }
    },
};
