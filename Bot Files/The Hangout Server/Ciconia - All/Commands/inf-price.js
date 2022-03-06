const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "price",
    aliases: config.aliases.aliasesprice,
    cooldown: config.cooldown.cooldownprice,
    permissions: config.permissions.permissionprice,
    description: "Embed template for devs.",
    execute(message, args, cmd, client, Discord) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`)

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
                .setFooter(config.embed.embedfooter);

            const newEmbed2 = new Discord.MessageEmbed()
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleprice2)
                .setImage(config.embed.embedimage)
                .setDescription(config.embeds.descriptionprice2)
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
                    },

                    {
                        name: `**--------**`,
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
                .setFooter(config.embed.embedfooter);

            if (!args[0]) {
                return message.channel.send(`What prices would you like to take a look at?`)
            }
            if (args[0] === "buy") {
                message.channel.send(newEmbed1)
            } else if (args[0] === "sell") {
                message.channel.send(newEmbed2)
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err0}\`.`)
        }
    },
};
