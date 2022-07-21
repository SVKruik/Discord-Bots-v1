// Bereken iets simpels als 1 + 1. 
// Werkt met args
// Werkt met een NPM package

const math = require("mathjs");
const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "randomnumber",
    aliases: config.aliases.aliasesrandomnumber,
    cooldown: config.cooldown.cooldownrandomnumber,
    permissions: config.permissions.permissionrandomnumber,
    description: "Basic calculation.",
    execute(message, args, cmd, client, Discord) {
        try {
            const limit = args[0]
            const randomnumber = Math.floor(Math.random() * limit);
            if (!args[0]) {
                return message.channel.send({ content: `What is the max number I can pick?` })
            }
            message.channel.send({ content: `Your random number is: \`${randomnumber}\`.` })
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
        }
    },
};
