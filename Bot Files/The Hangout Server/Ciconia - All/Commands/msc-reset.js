const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "reset",
    aliases: config.aliases.aliasesreset,
    cooldown: config.cooldown.cooldownmusic,
    permissions: config.permissions.permissionmusic,
    description: "Reset and clear all your songs stored in your library.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`)
            const max = 6
            const songid = Math.round(args[0])
            if (!args[0]) {
                return message.channel.send(`You are missing the song that you want to clear.`)
            }
            if (args[0] === "all" || "full" || "clear") {
                try {
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $set: {
                                music1: "https://www.youtube.com/",
                                music2: "https://www.youtube.com/",
                                music3: "https://www.youtube.com/",
                                music4: "https://www.youtube.com/",
                                music5: "https://www.youtube.com/",
                                music6: "https://www.youtube.com/",
                            },
                        }
                    );
                    message.channel.send(`Your music library is succesfully updated.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                }
            } else if (args[0] > max) {
                return message.channel.send(`You can only store up to \`${max}\` songs. Please choose a song you would like to reset between \`1\` and \`6\`.`)
            } else if (args[0] <= 0) {
                return message.channel.send(`You can only store up to \`${max}\` songs. Please choose a song you would like to reset between \`1\` and \`6\`.`)
            } else {
                if (args[0] === "1") {
                    try {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $set: {
                                    music1: "https://www.youtube.com/",
                                },
                            }
                        );
                        message.channel.send(`Your music library is succesfully updated.`)
                    } catch (err) {
                        console.log(err);
                        message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                    }
                } else if (args[0] === "2") {
                    try {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $set: {
                                    music2: "https://www.youtube.com/",
                                },
                            }
                        );
                        message.channel.send(`Your music library is succesfully updated.`)
                    } catch (err) {
                        console.log(err);
                        message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                    }
                } else if (args[0] === "3") {
                    try {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $set: {
                                    music3: "https://www.youtube.com/",
                                },
                            }
                        );
                        message.channel.send(`Your music library is succesfully updated.`)
                    } catch (err) {
                        console.log(err);
                        message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                    }
                } else if (args[0] === "4") {
                    try {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $set: {
                                    music4: "https://www.youtube.com/",
                                },
                            }
                        );
                        message.channel.send(`Your music library is succesfully updated.`)
                    } catch (err) {
                        console.log(err);
                        message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                    }
                } else if (args[0] === "5") {
                    try {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $set: {
                                    music5: "https://www.youtube.com/",
                                },
                            }
                        );
                        message.channel.send(`Your music library is succesfully updated.`)
                    } catch (err) {
                        console.log(err);
                        message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                    }
                } else if (args[0] === "6") {
                    try {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $set: {
                                    music6: "https://www.youtube.com/",
                                },
                            }
                        );
                        message.channel.send(`Your music library is succesfully updated.`)
                    } catch (err) {
                        console.log(err);
                        message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                    }
                }
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC:`)
        }
    }
}
