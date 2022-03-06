const config = require("./../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "setshards",
    aliases: config.aliases.aliasessetshards,
    cooldown: config.cooldown.cooldownsetshards,
    permissions: config.permissions.permissionsetshards,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`)
            if (!args[0]) {
                return message.channel.send(config.basemessages.messagesmembermention)
            };
            if (!args[1]) {
                return message.channel.send(`What type of Shards would you like to modify?`)
            }
            if (!args[2]) {
                return message.channel.send(`What should the new amount be?`)
            }
            const amount = args[2];
            const target = message.mentions.users.first();
            if (!target) return message.channel.send(config.basemessages.messagesfinderror);

            if (amount < 0)
                return message.channel.send(config.basemessages.messagesgreaternegaone);

            if (args[1] === "diamond") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                shardsdiamond: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Diamond Shards\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)

                }
            } else if (args[1] === "platinum") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                shardsplatinum: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Platinum Shards\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)

                }
            } else if (args[1] === "gold") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                shardsgold: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Gold Shards\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                }
            } else if (args[1] === "silver") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                shardssilver: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Silver Shards\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                }
            } else if (args[1] === "bronze") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                shardsbronze: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Bronze Shards\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                }
            } else if (args[1] === "iron") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                shardsiron: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Iron Shards\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
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
                                shardsdiamond: amount,
                                shardsplatinum: amount,
                                shardsgold: amount,
                                shardssilver: amount,
                                shardsbronze: amount,
                                shardsiron: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Total Shards\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                }
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err0}\`.`)
        }
    },
};