const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "shop",
    aliases: config.aliases.aliasesshop,
    cooldown: config.cooldown.cooldownshop,
    permissions: config.permissions.permissionshop,
    description: "Displays all the items for sale.",
    execute(message, args, cmd, client, Discord) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleshop)
                .setImage(config.embed.embedimage)
                .setDescription(config.embeds.descriptionshop)
                .addFields(
                    {
                        name: `> **Boxes**`,
                        value: `Ultra - Super - Normal`,
                    },
                    {
                        name: `Description`,
                        value: `Open these boxes to receive \`Scraps\`. \`Scraps\` come in 6 rarities: Exotic, Legendary, Epic, Rare, Uncommon and Common. You can check the probabilities of these boxes with the command \`boxchances\`. You can sell or trade \`Scraps\` for coins. You can open boxes with \`boxopen ultra/super/normal\`.`,
                    },
                    {
                        name: `> **Shards**`,
                        value: `Diamond - Platinum - Gold - Silver - Bronze - Iron`,
                    },
                    {
                        name: `Description:`,
                        value: `Shards are rare tokens. You can buy special items with these. They come in the above 6 rarities. You can sell or trade them for coins or high rarity items.`,
                    },
                )
                .setFooter(config.embed.embedfooter);

            const flagmessage = newEmbed // Flag Systeem
            const flags = ["everyone", "here", "delete"];

            if (!args[0]) {
                message.channel.send(flagmessage)
            }

            if (args[0] === "delete") {
                if (!args[1]) {
                    if (!args[2]) {
                        message.delete();
                        message.channel.send(flagmessage)
                    }
                }
            } else if (args[1] === "delete") {
                if (!args[0]) {
                    if (!args[2]) {
                        message.delete();
                        message.channel.send(flagmessage)
                    }
                }
            } else if (args[2] === "delete") {
                if (!args[0]) {
                    if (!args[1]) {
                        message.delete();
                        message.channel.send(flagmessage)
                    }
                }
            }


            if (args[0] === "everyone") {
                if (args[1] === "here") {
                    return message.channel.send(`You cannot use both group tags at the same time.`)
                } else if (args[1] || args[2] === "delete") {
                    message.delete();
                    message.channel.send(`@everyone`)
                    message.channel.send(newEmbed)
                } else {
                    message.channel.send(`@everyone`)
                    message.channel.send(newEmbed)
                }
            } else if (args[1] === "everyone") {
                if (args[0] === "here") {
                    return message.channel.send(`You cannot use both group tags at the same time.`)
                } else if (args[0] || args[2] === "delete") {
                    message.delete();
                    message.channel.send(`@everyone`)
                    message.channel.send(newEmbed)
                } else {
                    message.channel.send(`@everyone`)
                    message.channel.send(newEmbed)
                }
            } else if (args[2] === "everyone") {
                return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
            }


            if (args[0] === "here") {
                if (args[1] === "everyone") {
                    return message.channel.send(`You cannot use both group tags at the same time.`)
                } else if (args[1] || args[2] === "delete") {
                    message.delete();
                    message.channel.send(`@here`)
                    message.channel.send(newEmbed)
                } else {
                    message.channel.send(`@here`)
                    message.channel.send(newEmbed)
                }
            } else if (args[1] === "here") {
                if (args[0] === "everyone") {
                    return message.channel.send(`You cannot use both group tags at the same time.`)
                } else if (args[0] || args[2] === "delete") {
                    message.delete();
                    message.channel.send(`@here`)
                    message.channel.send(newEmbed)
                } else {
                    message.channel.send(`@here`)
                    message.channel.send(newEmbed)
                }
            } else if (args[2] === "here") {
                return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err15}\`.`)
        }
    },
};