// Koop dozen of shards.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "buy",
    aliases: config.aliases.aliasesbuy,
    cooldown: config.cooldown.cooldownbuy,
    permissions: config.permissions.permissionbuy,
    description: "Buy stuff for coins.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.

            const item = args[0]
            const amount = args[1]

            if (!args[0]) {
                return message.channel.send(`What would you like to buy?`)
            }
            if (!args[1]) {
                return message.channel.send(`How many of this item would you like to buy?`)
            }
            if (args[0] === "ultra") {
                try {
                    const buypriceultra = config.boxbuyprice.ultra * amount
                    const newbal = profileData.wallet - buypriceultra
                    if (buypriceultra > profileData.wallet)
                        return message.channel.send(config.basemessages.messagescoinsmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: -buypriceultra,
                                boxesultra: amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Ultra Boxes\`, for a buyprice of \`${buypriceultra}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "super") {
                try {
                    const buypricesuper = config.boxbuyprice.super * amount
                    const newbal = profileData.wallet - buypricesuper
                    if (buypricesuper > profileData.wallet)
                        return message.channel.send(config.basemessages.messagescoinsmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: -buypricesuper,
                                boxessuper: amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Super Boxes\`, for a buyprice of \`${buypricesuper}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "normal") {
                try {
                    const buypricenormal = config.boxbuyprice.normal * amount
                    const newbal = profileData.wallet - buypricenormal
                    if (buypricenormal > profileData.wallet)
                        return message.channel.send(config.basemessages.messagescoinsmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: -buypricenormal,
                                boxesnormal: amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Normal Boxes\`, for a buyprice of \`${buypricenormal}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "diamond") {
                try {
                    const buypricediamond = config.shardbuyprice.diamond * amount
                    const newbal = profileData.wallet - buypricediamond
                    if (buypricediamond > profileData.wallet)
                        return message.channel.send(config.basemessages.messagescoinsmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: -buypricediamond,
                                shardsdiamond: amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Diamond Shards\`, for a buyprice of \`${buypricediamond}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "platinum") {
                try {
                    const buypriceplatinum = config.shardbuyprice.platinum * amount
                    const newbal = profileData.wallet - buypriceplatinum
                    if (buypriceplatinum > profileData.wallet)
                        return message.channel.send(config.basemessages.messagescoinsmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: -buypriceplatinum,
                                shardsplatinum: amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Platinum Shards\`, for a buyprice of \`${buypriceplatinum}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "gold") {
                try {
                    const buypricegold = config.shardbuyprice.gold * amount
                    const newbal = profileData.wallet - buypricegold
                    if (buypricegold > profileData.wallet)
                        return message.channel.send(config.basemessages.messagescoinsmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: -buypricegold,
                                shardsgold: amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Gold Shards\`, for a buyprice of \`${buypricegold}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "silver") {
                try {
                    const buypricesilver = config.shardbuyprice.silver * amount
                    const newbal = profileData.wallet - buypricesilver
                    if (buypricesilver > profileData.wallet)
                        return message.channel.send(config.basemessages.messagescoinsmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: -buypricesilver,
                                shardssilver: amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Silver Shards\`, for a buyprice of \`${buypricesilver}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "bronze") {
                try {
                    const buypricebronze = config.shardbuyprice.bronze * amount
                    const newbal = profileData.wallet - buypricebronze
                    if (buypricebronze > profileData.wallet)
                        return message.channel.send(config.basemessages.messagescoinsmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: -buypricebronze,
                                shardsbronze: amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Bronze Shards\`, for a buyprice of \`${buypricebronze}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "iron") {
                try {
                    const buypriceiron = config.shardbuyprice.iron * amount
                    const newbal = profileData.wallet - buypriceiron
                    if (buypriceiron > profileData.wallet)
                        return message.channel.send(config.basemessages.messagescoinsmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: -buypriceiron,
                                shardsiron: amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Iron Shards\`, for a buyprice of \`${buypriceiron}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    }
}
