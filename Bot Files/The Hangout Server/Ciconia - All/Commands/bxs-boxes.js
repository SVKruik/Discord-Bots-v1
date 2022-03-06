const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "boxes",
    aliases: config.aliases.aliasesboxes,
    cooldown: config.cooldown.cooldownboxes,
    permissions: config.permissions.permissionboxes,
    description: "Displays your current boxes.",
    execute(message, args, cmd, client, Discord, profileData) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`)
            const newEmbed1 = new Discord.MessageEmbed()
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleboxes1)
                .setImage(config.embed.embedimage)
                .setDescription(`Here are all your boxes you have collected so far.`)
                .addFields(
                    { name: config.embeds.nameboxes1, value: `\`${profileData.boxesultra}\`` },
                    { name: config.embeds.nameboxes2, value: `\`${profileData.boxessuper}\`` },
                    { name: config.embeds.nameboxes3, value: `\`${profileData.boxesnormal}\`` },
                )
                .setFooter(config.embed.embedfooter);

            const newEmbed2 = new Discord.MessageEmbed()
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleboxes2)
                .setImage(config.embed.embedimage)
                .setDescription(`Here are all your \`Ultra Boxes\` you have collected so far.`)
                .addFields(
                    { name: config.embeds.nameboxes1, value: `\`${profileData.boxesultra}\`` },
                )
                .setFooter(config.embed.embedfooter);

            const newEmbed3 = new Discord.MessageEmbed()
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleboxes3)
                .setImage(config.embed.embedimage)
                .setDescription(`Here are all your \`Super Boxes\` you have collected so far.`)
                .addFields(
                    { name: config.embeds.nameboxes2, value: `\`${profileData.boxessuper}\`` },
                )
                .setFooter(config.embed.embedfooter);

            const newEmbed4 = new Discord.MessageEmbed()
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleboxes4)
                .setImage(config.embed.embedimage)
                .setDescription(`Here are all your \`Normal Boxes\` you have collected so far.`)
                .addFields(
                    { name: config.embeds.nameboxes3, value: `\`${profileData.boxesnormal}\`` },
                )
                .setFooter(config.embed.embedfooter);

            if (!args[0]) {
                message.channel.send(newEmbed1)
            } else if (args[0] === "ultra") {
                message.channel.send(newEmbed2)
            } else if (args[0] === "super") {
                message.channel.send(newEmbed3)
            } else if (args[0] === "normal") {
                message.channel.send(newEmbed4)
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err0}\`.`)
        }
    },
};
