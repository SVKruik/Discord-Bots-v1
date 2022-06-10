// Displays your current trading stats.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradingstatistics",
    aliases: config.aliases.aliasestradingstatistics,
    cooldown: config.cooldown.cooldowntradingstatistics,
    permissions: config.permissions.permissiontradingstatistics,
    description: "Display your trading statistics.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titletradingstatistics)
                .setImage(config.embed.embedimage)
                .setDescription(config.embeds.descriptiontradingstatistics)
                .addFields(
                    {
                        name: config.embeds.nametradingstatistics1,
                        value: `\`${profileData.prestige}\``,
                    },
                    {
                        name: config.embeds.nametradingstatistics2,
                        value: `\`${profileData.tradesaccepted}\``,
                    },
                    {
                        name: config.embeds.nametradingstatistics3,
                        value: `\`${profileData.tradesrejected}\``,
                    },
                    {
                        name: config.embeds.nametradingstatistics4,
                        value: `\`${profileData.traderecvamount}\``,
                    },
                    {
                        name: config.embeds.nametradingstatistics5,
                        value: `\`${profileData.tradexmitamount}\``,
                    },
                    {
                        name: config.embeds.nametradingstatistics6,
                        value: `\`${profileData.actions}\``,
                    },
                    {
                        name: config.embeds.nametradingstatistics7,
                        value: `\`${profileData.amountbuy}\``,
                    },
                    {
                        name: config.embeds.nametradingstatistics8,
                        value: `\`${profileData.amountsell}\``,
                    },
                    {
                        name: config.embeds.nametradingstatistics9,
                        value: `\`${profileData.timesbuy}\``,
                    },
                    {
                        name: config.embeds.nametradingstatistics10,
                        value: `\`${profileData.timessell}\``,
                    }
                )
                .setFooter({ text: config.embed.embedfooter });

            const flagmessage = newEmbed // Flag Systeem
            const flags = ["everyone", "here", "delete"];

            if (!args[0]) {
                message.channel.send({ embeds: [flagmessage] })
            }
            if (args[0] === "delete") {
                if (!args[1]) {
                    if (!args[2]) {
                        message.delete();
                        message.channel.send({ content: flagmessage })
                    }
                }
            } else if (args[1] === "delete") {
                if (!args[0]) {
                    if (!args[2]) {
                        message.delete();
                        message.channel.send({ content: flagmessage })
                    }
                }
            } else if (args[2] === "delete") {
                if (!args[0]) {
                    if (!args[1]) {
                        message.delete();
                        message.channel.send({ content: flagmessage })
                    }
                }
            }

            if (args[0] === "everyone") {
                if (args[1] === "here") {
                    return message.channel.send(`You cannot use both group tags at the same time.`)
                } else if (args[1] || args[2] === "delete") {
                    message.delete();
                    message.channel.send(`@everyone`)
                    message.channel.send({ embeds: [newEmbed] })
                } else {
                    message.channel.send(`@everyone`)
                    message.channel.send({ embeds: [newEmbed] })
                }
            } else if (args[1] === "everyone") {
                if (args[0] === "here") {
                    return message.channel.send(`You cannot use both group tags at the same time.`)
                } else if (args[0] || args[2] === "delete") {
                    message.delete();
                    message.channel.send(`@everyone`)
                    message.channel.send({ embeds: [newEmbed] })
                } else {
                    message.channel.send(`@everyone`)
                    message.channel.send({ embeds: [newEmbed] })
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
                    message.channel.send({ embeds: [newEmbed] })
                } else {
                    message.channel.send(`@here`)
                    message.channel.send({ embeds: [newEmbed] })
                }
            } else if (args[1] === "here") {
                if (args[0] === "everyone") {
                    return message.channel.send(`You cannot use both group tags at the same time.`)
                } else if (args[0] || args[2] === "delete") {
                    message.delete();
                    message.channel.send(`@here`)
                    message.channel.send({ embeds: [newEmbed] })
                } else {
                    message.channel.send(`@here`)
                    message.channel.send({ embeds: [newEmbed] })
                }
            } else if (args[2] === "here") {
                return message.channel.send(`You cannot use group tags as your third flag argument. Please use flag \`1\` or \`2\`.`)
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
        }
    },
};
