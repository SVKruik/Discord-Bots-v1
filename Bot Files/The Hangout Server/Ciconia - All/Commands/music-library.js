const config = require("../Other/config.js");
const musicModel = require("../models/musicSchema");

module.exports = {
    name: "musiclibrary",
    aliases: config.aliases.aliasesmusiclibrary,
    cooldown: config.cooldown.cooldownmusic,
    permissions: config.permissions.permissionmusic,
    description: "Show your music library for quick access of your favorite songs.",
    execute(message, args, cmd, client, Discord, musicData) {
        const newEmbed = new Discord.MessageEmbed()
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
                    value: `${musicData.music1}`,
                },
                {
                    name: `> **Song 2:**`,
                    value: `${musicData.music2}`,
                },
                {
                    name: `> **Song 3:**`,
                    value: `${musicData.music3}`,
                },
                {
                    name: `> **Song 4:**`,
                    value: `${musicData.music4}`,
                },
                {
                    name: `> **Song 5:**`,
                    value: `${musicData.music5}`,
                },
                {
                    name: `> **Song 6:**`,
                    value: `${musicData.music6}`,
                }
            )
            .setFooter(config.embed.embedfooter);

        if (!args[0]) {
            message.channel.send(newEmbed)
        } else if (args[0] === "1" || "song1") {
            message.channel.send(`Song 1: ${musicData.music1}`)
        } else if (args[0] === "2" || "song2") {
            message.channel.send(`Song 2: ${musicData.music2}`)
        } else if (args[0] === "3" || "song3") {
            message.channel.send(`Song 3: ${musicData.music3}`)
        } else if (args[0] === "4" || "song4") {
            message.channel.send(`Song 4: ${musicData.music4}`)
        } else if (args[0] === "5" || "song5") {
            message.channel.send(`Song 5: ${musicData.music5}`)
        } else if (args[0] === "6" || "song6") {
            message.channel.send(`Song 6: ${musicData.music6}`)
        } else if (args[0] !== "1" || "2" || "3" || "4" || "5" || "6" || "song1" || "song2" || "song3" || "song4" || "song5" || "song6") {
            return message.channel.send(`Your music library contains 6 songs, so \`${args[0]}\` is not a valid option.`)
        }
    }
}