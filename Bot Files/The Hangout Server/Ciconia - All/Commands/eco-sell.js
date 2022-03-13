// Verkoop munten

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "sell",
    aliases: config.aliases.aliasessell,
    cooldown: config.cooldown.cooldownsell,
    permissions: config.permissions.permissionsell,
    description: "Sell stuff for coins.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.

            const item = args[0]
            const amount = args[1]

            if (!args[0]) {
                return message.channel.send(`What would you like to sell?`)
            }
            if (!args[1]) {
                return message.channel.send(`How many of this item would you like to sell?`)
            }
            if (args[0] === "ultra") {
                try {
                    if (amount > profileData.boxesultra) {
                        return message.channel.send(`You don't have that amount of boxes.`)
                    }
                    const sellpriceultra = config.boxsellprice.ultra * amount
                    const newbal = profileData.wallet + sellpriceultra
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpriceultra,
                                boxesultra: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Ultra Boxes\`, for a market value of \`${sellpriceultra}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "super") {
                try {
                    if (amount > profileData.boxessuper) {
                        return message.channel.send(`You don't have that amount of boxes.`)
                    }
                    const sellpricesuper = config.boxsellprice.super * amount
                    const newbal = profileData.wallet + sellpricesuper
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpricesuper,
                                boxessuper: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Super Boxes\`, for a market value of \`${sellpricesuper}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "normal") {
                try {
                    if (amount > profileData.boxesnormal) {
                        return message.channel.send(`You don't have that amount of boxes.`)
                    }
                    const sellpricenormal = config.boxsellprice.normal * amount
                    const newbal = profileData.wallet + sellpricenormal
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpricenormal,
                                boxesnormal: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Normal Boxes\`, for a market value of \`${sellpricenormal}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "diamond") {
                try {
                    if (amount > profileData.shardsdiamond) {
                        return message.channel.send(`You don't have that amount of Shards.`)
                    }
                    const sellpricediamond = config.shardsellprice.diamond * amount
                    const newbal = profileData.wallet + sellpricediamond
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpricediamond,
                                shardsdiamond: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Diamond Shards\`, for a market value of \`${sellpricediamond}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "platinum") {
                try {
                    if (amount > profileData.shardsplatinum) {
                        return message.channel.send(`You don't have that amount of Shards.`)
                    }
                    const sellpriceplatinum = config.shardsellprice.platinum * amount
                    const newbal = profileData.wallet + sellpriceplatinum
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpriceplatinum,
                                shardsplatinum: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Platinum Shards\`, for a market value of \`${sellpriceplatinum}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "gold") {
                try {
                    if (amount > profileData.shardsgold) {
                        return message.channel.send(`You don't have that amount of Shards.`)
                    }
                    const sellpricegold = config.shardsellprice.gold * amount
                    const newbal = profileData.wallet + sellpricegold
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpricegold,
                                shardsgold: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Gold Shards\`, for a market value of \`${sellpricegold}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "silver") {
                try {
                    if (amount > profileData.shardssilver) {
                        return message.channel.send(`You don't have that amount of Shards.`)
                    }
                    const sellpricesilver = config.shardsellprice.silver * amount
                    const newbal = profileData.wallet + sellpricesilver
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpricesilver,
                                shardssilver: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Silver Shards\`, for a market value of \`${sellpricesilver}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "bronze") {
                try {
                    if (amount > profileData.shardsbronze) {
                        return message.channel.send(`You don't have that amount of Shards.`)
                    }
                    const sellpricebronze = config.shardsellprice.bronze * amount
                    const newbal = profileData.wallet + sellpricebronze
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpricebronze,
                                shardsbronze: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Bronze Shards\`, for a market value of \`${sellpricebronze}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "iron") {
                try {
                    if (amount > profileData.shardsiron) {
                        return message.channel.send(`You don't have that amount of Shards.`)
                    }
                    const sellpriceiron = config.shardsellprice.iron * amount
                    const newbal = profileData.wallet + sellpriceiron
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpriceiron,
                                shardsiron: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Iron Shards\`, for a market value of \`${sellpriceiron}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "exotic") {
                try {
                    if (amount > profileData.scrapexotic) {
                        return message.channel.send(`You don't have that amount of Scraps.`)
                    }
                    const sellpriceexotic = config.scrapsellprice.exotic * amount
                    const newbal = profileData.wallet + sellpriceexotic
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpriceexotic,
                                scrapexotic: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Exotic Scraps\`, for a market value of \`${sellpriceexotic}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "legendary") {
                try {
                    if (amount > profileData.scraplegendary) {
                        return message.channel.send(`You don't have that amount of Scraps.`)
                    }
                    const sellpricelegendary = config.scrapsellprice.legendary * amount
                    const newbal = profileData.wallet + sellpricelegendary
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpricelegendary,
                                scraplegendary: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Legendary Scraps\`, for a market value of \`${sellpricelegendary}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "epic") {
                try {
                    if (amount > profileData.scrapepic) {
                        return message.channel.send(`You don't have that amount of Scraps.`)
                    }
                    const sellpriceepic = config.scrapsellprice.epic * amount
                    const newbal = profileData.wallet + sellpriceepic
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpriceepic,
                                scrapepic: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Epic Scraps\`, for a market value of \`${sellpriceepic}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "rare") {
                try {
                    if (amount > profileData.scraprare) {
                        return message.channel.send(`You don't have that amount of Scraps.`)
                    }
                    const sellpricerare = config.scrapsellprice.rare * amount
                    const newbal = profileData.wallet + sellpricerare
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpricerare,
                                scraprare: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Rare Scraps\`, for a market value of \`${sellpricerare}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "uncommon") {
                try {
                    if (amount > profileData.scrapuncommon) {
                        return message.channel.send(`You don't have that amount of Scraps.`)
                    }
                    const sellpriceuncommon = config.scrapsellprice.uncommon * amount
                    const newbal = profileData.wallet + sellpriceuncommon
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpriceuncommon,
                                scrapuncommon: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Uncommon Scraps\`, for a market value of \`${sellpriceuncommon}\`. You new balance is \`${newbal}\`.`)
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
                }
            } else if (args[0] === "common") {
                try {
                    if (amount > profileData.scrapcommon) {
                        return message.channel.send(`You don't have that amount of Scraps.`)
                    }
                    const sellpricecommon = config.scrapsellprice.common * amount
                    const newbal = profileData.wallet + sellpricecommon
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                wallet: sellpricecommon,
                                scrapcommon: -amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Common Scraps\`, for a market value of \`${sellpricecommon}\`. You new balance is \`${newbal}\`.`)
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