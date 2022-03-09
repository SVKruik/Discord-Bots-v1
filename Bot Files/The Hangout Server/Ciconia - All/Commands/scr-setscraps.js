const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "setscraps",
    aliases: config.aliases.aliasessetscraps,
    cooldown: config.cooldown.cooldownsetscraps,
    permissions: config.permissions.permissionsetscraps,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
            if (!args[0]) {
                return message.channel.send(config.basemessages.messagesmembermention)
            };
            if (!args[1]) {
                return message.channel.send(`What type of Scraps would you like to modify?`)
            }
            if (!args[2]) {
                return message.channel.send(`What should the new amount be?`)
            }
            const amount = args[2];
            const target = message.mentions.users.first();
            if (!target) return message.channel.send(config.basemessages.messagesfinderror);

            if (amount < 0)
                return message.channel.send(config.basemessages.messagesgreaternegaone);

            if (args[1] === "exotic") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                scrapexotic: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Exotic Scrap\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem

                }
            } else if (args[1] === "legendary") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                scraplegendary: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Legendary Scrap\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem

                }
            } else if (args[1] === "epic") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                scrapepic: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Epic Scrap\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[1] === "rare") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                scraprare: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Rare Scrap\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[1] === "uncommon") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                scrapuncommon: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Uncommon Scrap\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[1] === "common") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                scrapcommon: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Common Scrap\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[1] === "all") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                scrapexotic: amount,
                                scraplegendary: amount,
                                scrapepic: amount,
                                scraprare: amount,
                                scrapuncommon: amount,
                                scrapcommon: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Total Scrap\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};
