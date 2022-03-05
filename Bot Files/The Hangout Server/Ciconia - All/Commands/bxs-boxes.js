const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "boxes",
    aliases: config.aliases.aliasesboxes,
    cooldown: config.cooldown.cooldownboxes,
    permissions: config.permissions.permissionboxes,
    description: "Displays your current boxes.",
    execute(message, args, cmd, client, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .setTitle(config.embeds.titleboxes)
            .setImage(config.embed.embedimage)
            .setDescription(`Here are all your boxes you have collected so far.`)
            .addFields(
                { name: config.embeds.nameboxes1, value: `\`${profileData.boxesultra}\`` },
                { name: config.embeds.nameboxes2, value: `\`${profileData.boxessuper}\`` },
                { name: config.embeds.nameboxes3, value: `\`${profileData.boxesnormal}\`` },
            )
            .setFooter(config.embed.embedfooter);

        const command =
            client.commands.get(cmd) ||
            client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
        console.log(`${message.author.username} used this command: ${command.name}`)

        const flagmessage = newEmbed
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
    },
};
