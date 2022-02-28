const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "musiclibrary",
    aliases: config.aliases.aliasesmusiclibrary,
    cooldown: config.cooldown.cooldownmusic,
    permissions: config.permissions.permissionmusic,
    description: "Embed template for devs.",
    execute(message, args, cmd, client, Discord, profileData) {
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
            .setFooter(config.embed.embedfooter);

            if(!args[0]) {
                message.channel.send(newEmbed)
            } else if (args[0] === "1") {
                message.channel.send(`Song 1: ${profileData.music1}`)
            } else if (args[0] === "2") {
                message.channel.send(`Song 2: ${profileData.music2}`)
            } else if (args[0] === "3") {
                message.channel.send(`Song 3: ${profileData.music3}`)
            } else if (args[0] === "4") {
                message.channel.send(`Song 4: ${profileData.music4}`)
            } else if (args[0] === "5") {
                message.channel.send(`Song 5: ${profileData.music5}`)
            } else if (args[0] === "6") {
                message.channel.send(`Song 6: ${profileData.music6}`)
            } else {
                return message.channel.send(`Your music library contains 6 songs, so \`${args[0]}\` is not a valid option.`)
            }
    }
}