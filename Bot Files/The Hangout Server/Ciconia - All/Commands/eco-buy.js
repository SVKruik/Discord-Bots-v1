const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "buy",
    aliases: config.aliases.aliasesbuy,
    cooldown: config.cooldown.cooldownbuy,
    permissions: config.permissions.permissionbuy,
    description: "Command template for devs.",
    async execute(message, args, cmd, client, Discord, profileData) {
        const command =
            client.commands.get(cmd) ||
            client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
        console.log(`${message.author.username} used this command: || ${command.name} ||`)

        const item = args[0]
        const amount = args[1]

        const itemlist = require("../Other/itemlist.js");
        const itemlistname = itemlist[Math.floor(Math.random() * itemlist.length)];
        const randomitem = itemlistname

        if (!args[0]) {
            return message.channel.send(`What would you like to buy?`)
        }
        if (!args[1]) {
            return message.channel.send(`How many of this item would you like to buy?`)
        }
        // if (args[0] !== "ultra" || "ultraboxes" || "ultrabox" || "super" || "superboxes" || "superbox" || "normal" || "normalboxes" || "normalbox" || "diamond" || "shardsdiamond" || "sharddiamond" || "platinum" || "shardsplatinum" || "shardplatinum" || "gold" || "shardsgold" || "shardgold" || "silver" || "shardssilver" || "shardsilver" || "bronze" || "shardsbronze" || "shardsbronze" || "iron" || "shardsiron" || "shardsiron") {
        //     return message.channel.send(`I don't know that item, or is currently not for sale. Maybe try \`${randomitem}\`?`)
        // }
        if (args[0] === "ultra" || "ultraboxes" || "ultrabox") {
            try {
                const priceultra = config.boxprice.ultra * amount
                const newbal = profileData.wallet - priceultra
                if (priceultra > profileData.wallet)
                    return message.channel.send(config.basemessages.messagescoinsmissing);
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            wallet: -priceultra,
                            boxesultra: amount,
                        },
                    }
                );
                message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Ultra Boxes\`, for a price of \`${priceultra}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "super" || "superboxes" || "superbox") {
            try {
                const pricesuper = config.boxprice.super * amount
                const newbal = profileData.wallet - pricesuper
                if (pricesuper > profileData.wallet)
                    return message.channel.send(config.basemessages.messagescoinsmissing);
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            wallet: -pricesuper,
                            boxessuper: amount,
                        },
                    }
                );
                message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Super Boxes\`, for a price of \`${pricesuper}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "normal" || "normalboxes" || "normalbox") {
            try {
                const pricenormal = config.boxprice.normal * amount
                const newbal = profileData.wallet - pricenormal
                if (pricenormal > profileData.wallet)
                    return message.channel.send(config.basemessages.messagescoinsmissing);
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            wallet: -pricenormal,
                            boxesnormal: amount,
                        },
                    }
                );
                message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Normal Boxes\`, for a price of \`${pricenormal}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "diamond" || "shardsdiamond" || "sharddiamond") {
            try {
                const pricediamond = config.shardprice.diamond * amount
                const newbal = profileData.wallet - pricediamond
                if (pricediamond > profileData.wallet)
                    return message.channel.send(config.basemessages.messagescoinsmissing);
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            wallet: -pricediamond,
                            shardsdiamond: amount,
                        },
                    }
                );
                message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Diamond Shards\`, for a price of \`${pricediamond}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "platinum" || "shardsplatinum" || "shardplatinum") {
            try {
                const priceplatinum = config.shardprice.platinum * amount
                const newbal = profileData.wallet - priceplatinum
                if (priceplatinum > profileData.wallet)
                    return message.channel.send(config.basemessages.messagescoinsmissing);
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            wallet: -priceplatinum,
                            shardsplatinum: amount,
                        },
                    }
                );
                message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Platinum Shards\`, for a price of \`${priceplatinum}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "gold" || "shardsgold" || "shardgold") {
            try {
                const pricegold = config.shardprice.gold * amount
                const newbal = profileData.wallet - pricegold
                if (pricegold > profileData.wallet)
                    return message.channel.send(config.basemessages.messagescoinsmissing);
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            wallet: -pricegold,
                            shardsgold: amount,
                        },
                    }
                );
                message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Gold Shards\`, for a price of \`${pricegold}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "silver" || "shardssilver" || "shardsilver") {
            try {
                const pricesilver = config.shardprice.silver * amount
                const newbal = profileData.wallet - pricesilver
                if (pricesilver > profileData.wallet)
                    return message.channel.send(config.basemessages.messagescoinsmissing);
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            wallet: -pricesilver,
                            shardssilver: amount,
                        },
                    }
                );
                message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Silver Shards\`, for a price of \`${pricesilver}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "bronze" || "shardsbronze" || "shardsbronze") {
            try {
                const pricebronze = config.shardprice.bronze * amount
                const newbal = profileData.wallet - pricebronze
                if (pricebronze > profileData.wallet)
                    return message.channel.send(config.basemessages.messagescoinsmissing);
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            wallet: -pricebronze,
                            shardsbronze: amount,
                        },
                    }
                );
                message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Bronze Shards\`, for a price of \`${pricebronze}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        } else if (args[0] === "iron" || "shardsiron" || "shardsiron") {
            try {
                const priceiron = config.shardprice.iron * amount
                const newbal = profileData.wallet - priceiron
                if (priceiron > profileData.wallet)
                    return message.channel.send(config.basemessages.messagescoinsmissing);
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            wallet: -priceiron,
                            shardsiron: amount,
                        },
                    }
                );
                message.channel.send(`You have succesfully bought \`${amount}\` amount of \`Iron Shards\`, for a price of \`${priceiron}\`. You new balance is \`${newbal}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
            }
        }
    }
}
