// Geef iemand een hoeveelheid dozen.

const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "giveboxes",
    aliases: config.aliases.aliasesgiveboxes,
    cooldown: config.cooldown.cooldowngiveboxes,
    permissions: config.permissions.permissiongiveboxes,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            if (!args[0]) {
                return message.channel.send(config.basemessages.messagesmembermention)
            }
            ;
            if (!args[1]) {
                return message.channel.send(`What type of boxes would you like to modify?`)
            }
            if (!args[2]) {
                return message.channel.send(`How many boxes do you want to give?`)
            }
            const amount = args[2];
            const target = message.mentions.users.first();
            if (!target) {
                return message.channel.send(config.basemessages.messagesfinderror);
            }

            if (amount <= 0) {
                return message.channel.send(config.basemessages.messagesgreaterone);
            }

            if (args[1] === "ultra") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) {
                        return message.channel.send(config.basemessages.messagesaccountmissing);
                    }
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $inc: {
                                boxesultra: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has been given \`${amount}\` amount of \`Ultra Boxes\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem

                }
            } else if (args[1] === "super") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) {
                        return message.channel.send(config.basemessages.messagesaccountmissing);
                    }
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $inc: {
                                boxessuper: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has been given \`${amount}\` amount of \`Super Boxes\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem

                }
            } else if (args[1] === "normal") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) {
                        return message.channel.send(config.basemessages.messagesaccountmissing);
                    }
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $inc: {
                                boxesnormal: amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has been given \`${amount}\` amount of \`Normal Boxes\`.`)
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
