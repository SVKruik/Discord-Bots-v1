// Neem munten op (bank --> wallet)

const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "withdraw",
    aliases: config.aliases.aliaseswithdraw,
    cooldown: config.cooldown.cooldownwithdraw,
    permissions: config.permissions.permissionwithdraw,
    description: "Bank to Wallet",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const amount = args[0];
            if (amount <= 0) {
                return message.channel.send(config.basemessages.messagesgreaterone);
            }

            try {
                if (amount > profileData.bank)
                    return message.channel.send(config.basemessages.messagescoinsmissing);

                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            wallet: amount,
                            bank: -amount,
                        },
                    }
                );

                const flagmessage = `You withdrew \`${amount}\` coins into your wallet.`
                const flags = ["everyone", "here", "delete"];

                if (!args[1]) {
                    message.channel.send({ content: flagmessage })
                }

                if (args[1] === "delete") {
                    if (!args[2]) {
                        if (!args[3]) {
                            message.delete();
                            message.channel.send({ content: flagmessage })
                        }
                    }
                } else if (args[2] === "delete") {
                    if (!args[1]) {
                        if (!args[3]) {
                            message.delete();
                            message.channel.send({ content: flagmessage })
                        }
                    }
                } else if (args[3] === "delete") {
                    if (!args[1]) {
                        if (!args[2]) {
                            message.delete();
                            message.channel.send({ content: flagmessage })
                        }
                    }
                }

                if (args[1] === "everyone") {
                    if (args[2] === "here") {
                        return message.channel.send(`You cannot use both group tags at the same time.`)
                    } else if (args[2] || args[3] === "delete") {
                        message.delete();
                        message.channel.send(`@everyone ${flagmessage}`)
                    } else {
                        message.channel.send(`@everyone ${flagmessage}`)
                    }
                } else if (args[2] === "everyone") {
                    if (args[1] === "here") {
                        return message.channel.send(`You cannot use both group tags at the same time.`)
                    } else if (args[1] || args[3] === "delete") {
                        message.delete();
                        message.channel.send(`@everyone ${flagmessage}`)
                    } else {
                        message.channel.send(`@everyone ${flagmessage}`)
                    }
                } else if (args[3] === "everyone") {
                    return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
                }

                if (args[1] === "here") {
                    if (args[2] === "everyone") {
                        return message.channel.send(`You cannot use both group tags at the same time.`)
                    } else if (args[2] || args[3] === "delete") {
                        message.delete();
                        message.channel.send(`@here ${flagmessage}`)
                    } else {
                        message.channel.send(`@here ${flagmessage}`)
                    }
                } else if (args[2] === "here") {
                    if (args[1] === "everyone") {
                        return message.channel.send(`You cannot use both group tags at the same time.`)
                    } else if (args[1] || args[3] === "delete") {
                        message.delete();
                        message.channel.send(`@here ${flagmessage}`)
                    } else {
                        message.channel.send(`@here ${flagmessage}`)
                    }
                } else if (args[3] === "here") {
                    return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
                }
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};
