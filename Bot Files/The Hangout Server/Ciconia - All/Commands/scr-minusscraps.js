const config = require("./../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "minusscraps",
    aliases: config.aliases.aliasesminusscraps,
    cooldown: config.cooldown.cooldowngivescraps,
    permissions: config.permissions.permissionminusscraps,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
        const command =
            client.commands.get(cmd) ||
            client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
        console.log(`${message.author.username} used this command: || ${command.name} ||`)
        if (!args[0]) {
            return message.channel.send(config.basemessages.messagesmembermention)
        };
        if (!args[1]) {
            return message.channel.send(`What type of Scraps would you like to modify?`)
        }
        if (!args[2]) {
            return message.channel.send(`How many Scraps would you like to delete?`)
        }
        const amount = args[2];
        const target = message.mentions.users.first();
        if (!target) return message.channel.send(config.basemessages.messagesfinderror);
        if (amount <= 0)
            return message.channel.send(config.basemessages.messagesgreaterone);

        if (args[1] === "exotic") {
            try {
                const targetData = await profileModel.findOne({ userID: target.id });
                if (!targetData) return message.channel.send(config.basemessages.messagesaccountmissing);
                await profileModel.findOneAndUpdate(
                    {
                        userID: target.id,
                    },
                    {
                        $inc: {
                            scrapexotic: -amount,
                        },
                    }
                );
                message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Exotic Scrap\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)

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
                        $inc: {
                            scraplegendary: -amount,
                        },
                    }
                );
                message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Legendary Scrap\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)

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
                        $inc: {
                            scrapepic: -amount,
                        },
                    }
                );
                message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Epic Scrap\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
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
                        $inc: {
                            scraprare: -amount,
                        },
                    }
                );
                message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Rare Scrap\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
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
                        $inc: {
                            scrapuncommon: -amount,
                        },
                    }
                );
                message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Uncommon Scrap\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
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
                        $inc: {
                            scrapcommon: -amount,
                        },
                    }
                );
                message.channel.send(`The targeted member has lost \`${amount}\` amount of \`Common Scrap\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        }
    },
};