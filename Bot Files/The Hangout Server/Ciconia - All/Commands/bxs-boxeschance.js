const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "boxeschance",
    aliases: config.aliases.aliasesboxeschance,
    cooldown: config.cooldown.cooldownboxeschance,
    permissions: config.permissions.permissionboxeschance,
    description: "Displays your current boxes.",
    execute(message, args, cmd, client, Discord, profileData) {
        const command =
            client.commands.get(cmd) ||
            client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
        console.log(`${message.author.username} used this command: || ${command.name} ||`)

        const chanceultrarare = config.boxchance.ultrarare
        const chanceultraepic = config.boxchance.ultraepic - config.boxchance.ultrarare
        const chanceultralegendary = config.boxchance.ultralegendary - config.boxchance.ultraepic
        const chanceultraexotic = config.boxchance.ultraexotic - config.boxchance.ultralegendary + 1

        const chancesupercommon = config.boxchance.supercommon
        const chancesuperuncommon = config.boxchance.superuncommon - config.boxchance.supercommon
        const chancesuperrare = config.boxchance.superrare - config.boxchance.superuncommon
        const chancesuperepic = config.boxchance.superepic - config.boxchance.superrare
        const chancesuperlegendary = config.boxchance.superlegendary - config.boxchance.superepic + 1

        const chancenormalcommon = config.boxchance.normalcommon
        const chancenormaluncommon = config.boxchance.normaluncommon - config.boxchance.normalcommon
        const chancenormalrare = config.boxchance.normalrare - config.boxchance.normaluncommon + 1

        const newEmbed1 = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .setTitle(config.embeds.titleboxeschance1)
            .setImage(config.embed.embedimage)
            .setDescription(`Here are all the probabilities of the different boxes you can buy and open.`)
            .addFields(
                { name: config.embeds.nameboxeschances1, value: `> **Ultra Box**` },
                { name: config.embeds.nameboxeschances2, value: `\`${chanceultraexotic}%\`` },
                { name: config.embeds.nameboxeschances3, value: `\`${chanceultralegendary}%\`` },
                { name: config.embeds.nameboxeschances4, value: `\`${chanceultraepic}%\`` },
                { name: config.embeds.nameboxeschances5, value: `\`${chanceultrarare}%\`` },
                { name: config.embeds.nameboxeschances6, value: `> **Super Box**` },
                { name: config.embeds.nameboxeschances7, value: `\`${chancesuperlegendary}%\`` },
                { name: config.embeds.nameboxeschances8, value: `\`${chancesuperepic}%\`` },
                { name: config.embeds.nameboxeschances9, value: `\`${chancesuperrare}%\`` },
                { name: config.embeds.nameboxeschances10, value: `\`${chancesuperuncommon}%\`` },
                { name: config.embeds.nameboxeschances11, value: `\`${chancesupercommon}%\`` },
                { name: config.embeds.nameboxeschances12, value: `> **Normal Box**` },
                { name: config.embeds.nameboxeschances13, value: `\`${chancenormalrare}%\`` },
                { name: config.embeds.nameboxeschances14, value: `\`${chancenormaluncommon}%\`` },
                { name: config.embeds.nameboxeschances15, value: `\`${chancenormalcommon}%\`` },
            )
            .setFooter(config.embed.embedfooter);

            const newEmbed2 = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .setTitle(config.embeds.titleboxeschance2)
            .setImage(config.embed.embedimage)
            .setDescription(`Here are all the probabilities of the box \`Ultra\` that you can buy and open.`)
            .addFields(
                { name: config.embeds.nameboxeschances1, value: `> **Ultra Box**` },
                { name: config.embeds.nameboxeschances2, value: `\`${chanceultraexotic}%\`` },
                { name: config.embeds.nameboxeschances3, value: `\`${chanceultralegendary}%\`` },
                { name: config.embeds.nameboxeschances4, value: `\`${chanceultraepic}%\`` },
                { name: config.embeds.nameboxeschances5, value: `\`${chanceultrarare}%\`` },
            )
            .setFooter(config.embed.embedfooter);

            const newEmbed3 = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .setTitle(config.embeds.titleboxeschance3)
            .setImage(config.embed.embedimage)
            .setDescription(`Here are all the probabilities of the box \`Super\` that you can buy and open.`)
            .addFields(
                { name: config.embeds.nameboxeschances6, value: `> **Super Box**` },
                { name: config.embeds.nameboxeschances7, value: `\`${chancesuperlegendary}%\`` },
                { name: config.embeds.nameboxeschances8, value: `\`${chancesuperepic}%\`` },
                { name: config.embeds.nameboxeschances9, value: `\`${chancesuperrare}%\`` },
                { name: config.embeds.nameboxeschances10, value: `\`${chancesuperuncommon}%\`` },
                { name: config.embeds.nameboxeschances11, value: `\`${chancesupercommon}%\`` },
            )
            .setFooter(config.embed.embedfooter);

            const newEmbed4 = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .setTitle(config.embeds.titleboxeschance4)
            .setImage(config.embed.embedimage)
            .setDescription(`Here are all the probabilities of the box \`Normal\` that you can buy and open.`)
            .addFields(
                { name: config.embeds.nameboxeschances12, value: `> **Normal Box**` },
                { name: config.embeds.nameboxeschances13, value: `\`${chancenormalrare}%\`` },
                { name: config.embeds.nameboxeschances14, value: `\`${chancenormaluncommon}%\`` },
                { name: config.embeds.nameboxeschances15, value: `\`${chancenormalcommon}%\`` },
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
    }
}