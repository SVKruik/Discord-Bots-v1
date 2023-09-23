// Laat de hoeveelheid scraps zien die je hebt

const config = require("../other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "scraps",
    aliases: config.aliases.aliasesscraps,
    cooldown: config.cooldown.cooldownscraps,
    permissions: config.permissions.permissionscraps,
    description: "Displays your current scraps.",
    execute(message, args, cmd, client, Discord, profileData) {
        try {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titlescraps)
                .setImage(config.embed.embedimage)
                .setDescription(`Here are all your scraps you have collected so far.`)
                .addFields(
                    { name: config.embeds.namescraps1, value: `\`${profileData.scrapexotic}\`` },
                    { name: config.embeds.namescraps2, value: `\`${profileData.scraplegendary}\`` },
                    { name: config.embeds.namescraps3, value: `\`${profileData.scrapepic}\`` },
                    { name: config.embeds.namescraps4, value: `\`${profileData.scraprare}\`` },
                    { name: config.embeds.namescraps5, value: `\`${profileData.scrapuncommon}\`` },
                    { name: config.embeds.namescraps6, value: `\`${profileData.scrapcommon}\`` },
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
                        message.channel.send({ embeds: [flagmessage] })
                    }
                }
            } else if (args[1] === "delete") {
                if (!args[0]) {
                    if (!args[2]) {
                        message.delete();
                        message.channel.send({ embeds: [flagmessage] })
                    }
                }
            } else if (args[2] === "delete") {
                if (!args[0]) {
                    if (!args[1]) {
                        message.delete();
                        message.channel.send({ embeds: [flagmessage] })
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
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};
