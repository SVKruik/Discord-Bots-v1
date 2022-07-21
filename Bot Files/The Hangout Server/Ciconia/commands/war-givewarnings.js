// Geef iemand een waarschuwing

const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "givewarnings",
    aliases: config.aliases.aliasesgivewarnings,
    cooldown: config.cooldown.cooldowngivewarnings,
    permissions: config.permissions.permissiongivewarnings,
    description: "Give someone a warning.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            if (!args[0]) {
                return message.channel.send(config.basemessages.messagesmembermention)
            };
            const target = message.mentions.users.first();
            if (!target) {
                return message.channel.send(config.basemessages.messagesfinderror);
            }
            if (args[1] === "force") {
                const newamount = profileData.warnings + 1
                if (newamount >= 3) {
                    try {
                        const newamount = profileData.warnings + 1
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
                                    warnings: 1,
                                },
                            }
                        );
                        message.channel.send(`The targeted member has been given a warning, resulting in a new total of \`${newamount}\` warnings.`)
                        const memberTarget = message.guild.members.cache.get(target.id);
                        memberTarget.kick();
                        message.channel.send(`Targeted member has exceeded the warning limit, resulting in a kick from the server.`)
                    } catch (err) {
                        console.log(err);
                        message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                    }
                } else if (newamount <= 2) {
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
                                    warnings: 1,
                                },
                            }
                        );
                        message.channel.send(`The targeted member has been given a warning, resulting in a new total of \`${newamount}\` warnings.`)
                        if (newamount == 2) {
                            message.channel.send(`Targeted member has \`1\` warning left.`)
                        } else if (newamount == 1) {
                            message.channel.send(`Targeted member has \`2\` warnings left.`)
                        }
                    } catch (err) {
                        console.log(err);
                        message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                    }
                }
            } else if (!args[1]) {
                try {
                    const newamount = profileData.warnings + 1
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
                                warnings: 1,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has been given a warning, resulting in a new total of \`${newamount}\` warnings.`)
                    if (newamount >= 3) {
                        message.channel.send(`Targeted member has exceeded the warning limit.`)
                    } else if (newamount == 2) {
                        message.channel.send(`Targeted member has \`1\` warning left.`)
                    } else if (newamount == 1) {
                        message.channel.send(`Targeted member has \`2\` warnings left.`)
                    }
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
