// Laat verkoop en koop prijzen zien van spullen.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "price",
    aliases: config.aliases.aliasesprice,
    cooldown: config.cooldown.cooldownprice,
    permissions: config.permissions.permissionprice,
    description: "Embed template for devs.",
    execute(message, args, cmd, client, Discord) {
        try {
            const newEmbed1 = new Discord.MessageEmbed()
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleprice1)
                .setImage(config.embed.embedimage)
                .setDescription(config.embeds.descriptionprice1)
                .addFields(
                    {
                        name: `> **Buy Prices**`,
                        value: `**Boxes**`,
                    },
                    {
                        name: `Ultra Boxes`,
                        value: `\`${config.boxbuyprice.ultra}\``,
                    },
                    {
                        name: `Super Boxes`,
                        value: `\`${config.boxbuyprice.super}\``,
                    },
                    {
                        name: `Normal Boxes`,
                        value: `\`${config.boxbuyprice.normal}\``,
                    }
                )
                .setFooter({ text: config.embed.embedfooter });

            const newEmbed2 = new Discord.MessageEmbed()
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleprice2)
                .setImage(config.embed.embedimage)
                .setDescription(config.embeds.descriptionprice2)
                .addFields(
                    {
                        name: `> **Buy Prices**`,
                        value: `**Shards**`,
                    },
                    {
                        name: `**--------**`,
                        value: `**Shards**`,
                    },
                    {
                        name: `Diamond Shards`,
                        value: `\`${config.shardbuyprice.diamond}\``,
                    },
                    {
                        name: `Platinum Shards`,
                        value: `\`${config.shardbuyprice.platinum}\``,
                    },
                    {
                        name: `Gold Shards`,
                        value: `\`${config.shardbuyprice.gold}\``,
                    },
                    {
                        name: `Silver Shards`,
                        value: `\`${config.shardbuyprice.silver}\``,
                    },
                    {
                        name: `Bronze Shards`,
                        value: `\`${config.shardbuyprice.bronze}\``,
                    },
                    {
                        name: `Iron Shards`,
                        value: `\`${config.shardbuyprice.iron}\``,
                    }
                )
                .setFooter({ text: config.embed.embedfooter });

            const newEmbed3 = new Discord.MessageEmbed()
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleprice3)
                .setImage(config.embed.embedimage)
                .setDescription(config.embeds.descriptionprice3)
                .addFields(
                    {
                        name: `> **Sell Prices**`,
                        value: `**Scraps**`,
                    },
                    {
                        name: `Exotic Scraps`,
                        value: `\`${config.scrapsellprice.exotic}\``,
                    },
                    {
                        name: `Legendary Scraps`,
                        value: `\`${config.scrapsellprice.legendary}\``,
                    },
                    {
                        name: `Epic Scraps`,
                        value: `\`${config.scrapsellprice.epic}\``,
                    },
                    {
                        name: `Rare Scraps`,
                        value: `\`${config.scrapsellprice.rare}\``,
                    },
                    {
                        name: `Uncommon Scraps`,
                        value: `\`${config.scrapsellprice.uncommon}\``,
                    },
                    {
                        name: `Common Scraps`,
                        value: `\`${config.scrapsellprice.common}\``,
                    },
                )
                .setFooter({ text: config.embed.embedfooter });

            const newEmbed4 = new Discord.MessageEmbed()
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleprice4)
                .setImage(config.embed.embedimage)
                .setDescription(config.embeds.descriptionprice4)
                .addFields(
                    {
                        name: `> **Sell Prices**`,
                        value: `**Boxes**`,
                    },
                    {
                        name: `Ultra Boxes`,
                        value: `\`${config.boxsellprice.ultra}\``,
                    },
                    {
                        name: `Super Boxes`,
                        value: `\`${config.boxsellprice.super}\``,
                    },
                    {
                        name: `Normal Boxes`,
                        value: `\`${config.boxsellprice.normal}\``,
                    }
                )
                .setFooter({ text: config.embed.embedfooter });

            const newEmbed5 = new Discord.MessageEmbed()
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleprice5)
                .setImage(config.embed.embedimage)
                .setDescription(config.embeds.descriptionprice5)
                .addFields(
                    {
                        name: `> **Sell Prices**`,
                        value: `**Shards**`,
                    },
                    {
                        name: `Diamond Shards`,
                        value: `\`${config.shardsellprice.diamond}\``,
                    },
                    {
                        name: `Platinum Shards`,
                        value: `\`${config.shardsellprice.platinum}\``,
                    },
                    {
                        name: `Gold Shards`,
                        value: `\`${config.shardsellprice.gold}\``,
                    },
                    {
                        name: `Silver Shards`,
                        value: `\`${config.shardsellprice.silver}\``,
                    },
                    {
                        name: `Bronze Shards`,
                        value: `\`${config.shardsellprice.bronze}\``,
                    },
                    {
                        name: `Iron Shards`,
                        value: `\`${config.shardsellprice.iron}\``,
                    }
                )
                .setFooter({ text: config.embed.embedfooter });

            if (!args[0]) {
                return message.channel.send(`Would you like to take a look at the \`buy\` or \`sell\` prices?`)
            }
            if (!args[1]) {
                return message.channel.send(`What type of item would you like to take a look at?`)
            }
            if (args[0] === "buy") {
                if (args[1] === "scraps" || args[1] === "scrap") {
                    return message.channel.send(`Scraps can only be obtained through loot boxes! Scraps can only be sold, not bought.`)
                } else if (args[1] === "boxes" || args[1] === "box") {
                    message.channel.send({ embeds: [newEmbed1] })
                } else if (args[1] === "shards" || args[1] === "shard") {
                    message.channel.send({ embeds: [newEmbed2] })
                }
            } else if (args[0] === "sell") {
                if (args[1] === "scraps" || args[1] === "scrap") {
                    message.channel.send({ embeds: [newEmbed3] })
                } else if (args[1] === "boxes" || args[1] === "box") {
                    message.channel.send({ embeds: [newEmbed4] })
                } else if (args[1] === "shards" || args[1] === "shard") {
                    message.channel.send({ embeds: [newEmbed5] })
                }
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${ config.errorcodes.err16}\`.`)
        }
    },
};
