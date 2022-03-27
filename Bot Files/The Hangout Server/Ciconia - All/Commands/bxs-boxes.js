// Check hoeveel dozen je hebt.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "boxes",
    aliases: config.aliases.aliasesboxes,
    cooldown: config.cooldown.cooldownboxes,
    permissions: config.permissions.permissionboxes,
    description: "Displays your current boxes.",
    execute(message, args, cmd, client, Discord, profileData) {
        try {
            const newEmbed1 = new Discord.MessageEmbed() // allemaal
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleboxes1)
                .setImage(config.embed.embedimage)
                .setDescription(`Here are all your boxes you have collected so far.`)
                .addFields(
                    { name: config.embeds.nameboxes1, value: `\`${profileData.boxesultra}\`` },
                    { name: config.embeds.nameboxes2, value: `\`${profileData.boxessuper}\`` },
                    { name: config.embeds.nameboxes3, value: `\`${profileData.boxesnormal}\`` },
                )
                .setFooter({ text: config.embed.embedfooter });

            const newEmbed2 = new Discord.MessageEmbed() // alleen ultra
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleboxes2)
                .setImage(config.embed.embedimage)
                .setDescription(`Here are all your \`Ultra Boxes\` you have collected so far.`)
                .addFields(
                    { name: config.embeds.nameboxes1, value: `\`${profileData.boxesultra}\`` },
                )
                .setFooter({ text: config.embed.embedfooter });

            const newEmbed3 = new Discord.MessageEmbed() // alleen super
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleboxes3)
                .setImage(config.embed.embedimage)
                .setDescription(`Here are all your \`Super Boxes\` you have collected so far.`)
                .addFields(
                    { name: config.embeds.nameboxes2, value: `\`${profileData.boxessuper}\`` },
                )
                .setFooter({ text: config.embed.embedfooter });

            const newEmbed4 = new Discord.MessageEmbed() // alleen normaal
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleboxes4)
                .setImage(config.embed.embedimage)
                .setDescription(`Here are all your \`Normal Boxes\` you have collected so far.`)
                .addFields(
                    { name: config.embeds.nameboxes3, value: `\`${profileData.boxesnormal}\`` },
                )
                .setFooter({ text: config.embed.embedfooter });

            if (!args[0]) {
                message.channel.send({ embeds: [newEmbed1] }) // verzend systeem
            } else if (args[0] === "ultra") {
                message.channel.send({ embeds: [newEmbed2] })
            } else if (args[0] === "super") {
                message.channel.send({ embeds: [newEmbed3] })
            } else if (args[0] === "normal") {
                message.channel.send({ embeds: [newEmbed4] })
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err15}\`.`)
        }
    },
};
