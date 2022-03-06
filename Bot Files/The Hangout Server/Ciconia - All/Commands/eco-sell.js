const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "sell",
    aliases: config.aliases.aliasessell,
    cooldown: config.cooldown.cooldownsell,
    permissions: config.permissions.permissionsell,
    description: "Sell stuff for coins.",
    async execute(message, args, cmd, client, Discord, profileData) {
        const command =
            client.commands.get(cmd) ||
            client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
        console.log(`${message.author.username} used this command: || ${command.name} ||`)

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
                message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Ultra Boxes\`, for a sellprice of \`${sellpriceultra}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "super") {
            try {
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
                message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Super Boxes\`, for a sellprice of \`${sellpricesuper}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "normal") {
            try {
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
                message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Normal Boxes\`, for a sellprice of \`${sellpricenormal}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "diamond") {
            try {
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
                message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Diamond Shards\`, for a sellprice of \`${sellpricediamond}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "platinum") {
            try {
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
                message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Platinum Shards\`, for a sellprice of \`${sellpriceplatinum}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "gold") {
            try {
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
                message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Gold Shards\`, for a sellprice of \`${sellpricegold}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "silver") {
            try {
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
                message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Silver Shards\`, for a sellprice of \`${sellpricesilver}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "bronze") {
            try {
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
                message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Bronze Shards\`, for a sellprice of \`${sellpricebronze}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "iron") {
            try {
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
                message.channel.send(`You have succesfully sold \`${amount}\` amount of \`Iron Shards\`, for a sellprice of \`${sellpriceiron}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        }
    }
}