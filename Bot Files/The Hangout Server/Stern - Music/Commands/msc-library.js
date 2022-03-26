// Laat je opgeslagen muziek bibliotheek zien.
// Quick access naar je favoriete links voor de muziek bot.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "musiclibrary",
    aliases: config.aliases.aliasesmusiclibrary,
    cooldown: config.cooldown.cooldownmusic,
    permissions: config.permissions.permissionmusic,
    description: "Show your music library for quick access of your favorite songs.",
    execute(message, args, cmd, client, Discord, profileData) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleembedtemplate)
                .setImage(config.embed.embedimage)
                .setDescription("Here is your library of music you have stored. You can quick access links to use for the music bot.")
                .addFields(
                    {
                        name: `Your songs that you have stored:`,
                        value: `**------**`,
                    },
                    {
                        name: `> **Song 1:**`,
                        value: `${profileData.music1}`,
                    },
                    {
                        name: `> **Song 2:**`,
                        value: `${profileData.music2}`,
                    },
                    {
                        name: `> **Song 3:**`,
                        value: `${profileData.music3}`,
                    },
                    {
                        name: `> **Song 4:**`,
                        value: `${profileData.music4}`,
                    },
                    {
                        name: `> **Song 5:**`,
                        value: `${profileData.music5}`,
                    },
                    {
                        name: `> **Song 6:**`,
                        value: `${profileData.music6}`,
                    }
                )
                .setFooter({ text: config.embed.embedfooter });

            if (!args[0]) {
                message.channel.send({ embeds: [newEmbed] })
            } else if (args[0] === "1" || "song1") {
                message.channel.send(`Song 1: ${profileData.music1}`)
            } else if (args[0] === "2" || "song2") {
                message.channel.send(`Song 2: ${profileData.music2}`)
            } else if (args[0] === "3" || "song3") {
                message.channel.send(`Song 3: ${profileData.music3}`)
            } else if (args[0] === "4" || "song4") {
                message.channel.send(`Song 4: ${profileData.music4}`)
            } else if (args[0] === "5" || "song5") {
                message.channel.send(`Song 5: ${profileData.music5}`)
            } else if (args[0] === "6" || "song6") {
                message.channel.send(`Song 6: ${profileData.music6}`)
            } else if (args[0] !== "1" || "2" || "3" || "4" || "5" || "6" || "song1" || "song2" || "song3" || "song4" || "song5" || "song6") {
                return message.channel.send(`Your music library contains 6 songs, so \`${args[0]}\` is not a valid option.`)
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    }
}