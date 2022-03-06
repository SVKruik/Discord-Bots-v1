const config = require("./../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "setboxes",
    aliases: config.aliases.aliasessetboxes,
    cooldown: config.cooldown.cooldownsetboxes,
    permissions: config.permissions.permissionsetboxes,
    description: "Set the amount of boxes of a member.",
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
                return message.channel.send(`What type of boxes would you like to modify?`)
            }
            if (!args[2]) {
                return message.channel.send(`What should the new amount be?`)
            }
            const amount = args[2];
            const target = message.mentions.users.first();
            if (!target) return message.channel.send(config.basemessages.messagesfinderror);

            if (amount < 0)
                return message.channel.send(config.basemessages.messagesgreaternegaone);

            if (args[1] === "ultra") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                boxesultra: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Ultra Boxes\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)

                }
            } else if (args[1] === "super") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                boxessuper: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Super Boxes\` is now \`${amount}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)

                }
            } else if (args[1] === "normal") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $set: {
                                boxesnormal: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Normal Boxes\` is now \`${amount}\`.`)
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
                                boxesultra: amount,
                                boxessuper: amount,
                                boxesnormal: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member's amount of \`Total Boxes\` is now \`${amount}\`.`)
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
