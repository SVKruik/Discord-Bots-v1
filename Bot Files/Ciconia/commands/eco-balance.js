// Laat je hoeveelheid munten zien.

const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "balance",
    aliases: config.aliases.aliasesbalance,
    cooldown: config.cooldown.cooldownbalance,
    permissions: config.permissions.permissionbalance,
    description: "Display both your wallet and bank balance.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const flagmessage = `${message.author.username}, your current wallet balance is \`${profileData.wallet}\` and your bank account balance is \`${profileData.bank}\`.`
            const flags = ["everyone", "here", "delete"];

            if (!args[0]) {
                message.channel.send({ content: flagmessage })
            }
            if (args[0] === "delete") {
                if (!args[1]) {
                    if (!args[2]) {
                        message.delete();
                        message.channel.send({ content: flagmessage })
                    }
                }
            } else if (args[1] === "delete") {
                if (!args[0]) {
                    if (!args[2]) {
                        message.delete();
                        message.channel.send({ content: flagmessage })
                    }
                }
            } else if (args[2] === "delete") {
                if (!args[0]) {
                    if (!args[1]) {
                        message.delete();
                        message.channel.send({ content: flagmessage })
                    }
                }
            }

            if (args[0] === "everyone") {
                if (args[1] === "here") {
                    return message.channel.send(`You cannot use both group tags at the same time.`)
                } else if (args[1] || args[2] === "delete") {
                    message.delete();
                    message.channel.send(`@everyone ${flagmessage}`)
                } else {
                    message.channel.send(`@everyone ${flagmessage}`)
                }
            } else if (args[1] === "everyone") {
                if (args[0] === "here") {
                    return message.channel.send(`You cannot use both group tags at the same time.`)
                } else if (args[0] || args[2] === "delete") {
                    message.delete();
                    message.channel.send(`@everyone ${flagmessage}`)
                } else {
                    message.channel.send(`@everyone ${flagmessage}`)
                }
            } else if (args[2] === "everyone") {
                return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
            }

            if (args[0] === "here") {
                if (args[1] === "everyone") {
                    return message.channel.send(`You cannot use both group tags at the same time.`)
                } else if (args[1] || args[2] === "delete") {
                    message.delete();
                    message.channel.send(`@here ${flagmessage}`)
                } else {
                    message.channel.send(`@here ${flagmessage}`)
                }
            } else if (args[1] === "here") {
                if (args[0] === "everyone") {
                    return message.channel.send(`You cannot use both group tags at the same time.`)
                } else if (args[0] || args[2] === "delete") {
                    message.delete();
                    message.channel.send(`@here ${flagmessage}`)
                } else {
                    message.channel.send(`@here ${flagmessage}`)
                }
            } else if (args[2] === "here") {
                return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};
