const config = require("./../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "minusshards",
    aliases: config.aliases.aliasesminusshards,
    cooldown: config.cooldown.cooldownminusshards,
    permissions: config.permissions.permissionminusshards,
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
                return message.channel.send(`How many shards would you like to delete?`)
            }
            const amount = args[2];
            const target = message.mentions.users.first();
            if (!target) return message.channel.send(config.basemessages.messagesfinderror);

            if (amount <= 0)
                return message.channel.send(config.basemessages.messagesgreaterone);

            if (args[1] === "diamond") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $inc: {
                                shardsdiamond: -amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Diamond Shards\`.`)
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
                            $inc: {
                                shardsplatinum: -amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Platinum Shards\`.`)
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
                            $inc: {
                                shardsgold: -amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Gold Shards\`.`)
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
                            $inc: {
                                shardssilver: -amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Silver Shards\`.`)
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
                            $inc: {
                                shardsbronze: -amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Bronze Shards\`.`)
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
                            $inc: {
                                shardsiron: -amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Iron Shards\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                }
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC:`)
        }
    },
};