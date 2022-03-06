const config = require("./../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "minusboxes",
    aliases: config.aliases.aliasesminusboxes,
    cooldown: config.cooldown.cooldownminusboxes,
    permissions: config.permissions.permissionminusboxes,
    description: "Decrease the amount of boxes of a member.",
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
                return message.channel.send(`How many boxes would you like to delete?`)
            }
            const amount = args[2];
            const target = message.mentions.users.first();
            if (!target) return message.channel.send(config.basemessages.messagesfinderror);

            if (amount <= 0)
                return message.channel.send(config.basemessages.messagesgreaterone);

            if (args[1] === "ultra") {
                try {
                    const targetData = await profileModel.findOne({ userID: target.id });
                    if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: target.id,
                        },
                        {
                            $inc: {
                                boxesultra: -amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Ultra Boxes\``)
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
                            $inc: {
                                boxessuper: -amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Super Boxes\``)
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
                            $inc: {
                                boxesnormal: -amount,
                            },
                        }
                    );
                    message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Normal Boxes\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)

                }
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
        }
    },
};
