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
        //
        const amountultrarare = config.scrapamount.ultrarare
        const amountultraepic = config.scrapamount.ultraepic
        const amountultralegendary = config.scrapamount.ultralegendary
        const amountultraexotic = config.scrapamount.ultraexotic

        const amountsupercommon = config.scrapamount.supercommon
        const amountsuperuncommon = config.scrapamount.superuncommon
        const amountsuperrare = config.scrapamount.superrare
        const amountsuperepic = config.scrapamount.superepic
        const amountsuperlegendary = config.scrapamount.superlegendary

        const amountnormalcommon = config.scrapamount.normalcommon
        const amountnormaluncommon = config.scrapamount.normaluncommon
        const amountnormalrare = config.scrapamount.normalrare

        const newEmbed1 = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .setTitle(config.embeds.titleboxeschance1)
            .setImage(config.embed.embedimage)
            .setDescription(`Here are all the probabilities of the different boxes you can buy and open. It also shows you the \`maximum\` amount of scraps you can get for each box and rarity. The minimum is \`1\` everywhere.`)
            .addFields(
                { name: config.embeds.nameboxeschances1, value: `> **Ultra Box**` },
                { name: config.embeds.nameboxeschances2, value: `\`${chanceultraexotic}%\` **---** \`${amountultraexotic}\`` },
                { name: config.embeds.nameboxeschances3, value: `\`${chanceultralegendary}%\` **---** \`${amountultralegendary}\`` },
                { name: config.embeds.nameboxeschances4, value: `\`${chanceultraepic}%\` **---** \`${amountultraepic}\`` },
                { name: config.embeds.nameboxeschances5, value: `\`${chanceultrarare}%\` **---** \`${amountultrarare}\`` },
                { name: config.embeds.nameboxeschances6, value: `> **Super Box**` },
                { name: config.embeds.nameboxeschances7, value: `\`${chancesuperlegendary}%\` **---** \`${amountsuperlegendary}\`` },
                { name: config.embeds.nameboxeschances8, value: `\`${chancesuperepic}%\` **---** \`${amountsuperepic}\`` },
                { name: config.embeds.nameboxeschances9, value: `\`${chancesuperrare}%\` **---** \`${amountsuperrare}\`` },
                { name: config.embeds.nameboxeschances10, value: `\`${chancesuperuncommon}%\` **---** \`${amountsuperuncommon}\`` },
                { name: config.embeds.nameboxeschances11, value: `\`${chancesupercommon}%\` **---** \`${amountsupercommon}\`` },
                { name: config.embeds.nameboxeschances12, value: `> **Normal Box**` },
                { name: config.embeds.nameboxeschances13, value: `\`${chancenormalrare}%\` **---** \`${amountnormalrare}\`` },
                { name: config.embeds.nameboxeschances14, value: `\`${chancenormaluncommon}%\` **---** \`${amountnormaluncommon}\`` },
                { name: config.embeds.nameboxeschances15, value: `\`${chancenormalcommon}%\` **---** \`${amountnormalcommon}\`` },
            )
            .setFooter(config.embed.embedfooter);

        const newEmbed2 = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .setTitle(config.embeds.titleboxeschance2)
            .setImage(config.embed.embedimage)
            .setDescription(`Here are all the probabilities of the box \`Ultra\` that you can buy and open. It also shows you the \`maximum\` amount of scraps you can get for each box and rarity. The minimum is \`1\` everywhere.`)
            .addFields(
                { name: config.embeds.nameboxeschances1, value: `> **Ultra Box**` },
                { name: config.embeds.nameboxeschances2, value: `\`${chanceultraexotic}%\` **---** \`${amountultraexotic}\`` },
                { name: config.embeds.nameboxeschances3, value: `\`${chanceultralegendary}%\` **---** \`${amountultralegendary}\`` },
                { name: config.embeds.nameboxeschances4, value: `\`${chanceultraepic}%\` **---** \`${amountultraepic}\`` },
                { name: config.embeds.nameboxeschances5, value: `\`${chanceultrarare}%\` **---** \`${amountultrarare}\`` },
            )
            .setFooter(config.embed.embedfooter);

        const newEmbed3 = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .setTitle(config.embeds.titleboxeschance3)
            .setImage(config.embed.embedimage)
            .setDescription(`Here are all the probabilities of the box \`Super\` that you can buy and open. It also shows you the \`maximum\` amount of scraps you can get for each box and rarity. The minimum is \`1\` everywhere.`)
            .addFields(
                { name: config.embeds.nameboxeschances6, value: `> **Super Box**` },
                { name: config.embeds.nameboxeschances7, value: `\`${chancesuperlegendary}%\` **---** \`${amountsuperlegendary}\`` },
                { name: config.embeds.nameboxeschances8, value: `\`${chancesuperepic}%\` **---** \`${amountsuperepic}\`` },
                { name: config.embeds.nameboxeschances9, value: `\`${chancesuperrare}%\` **---** \`${amountsuperrare}\`` },
                { name: config.embeds.nameboxeschances10, value: `\`${chancesuperuncommon}%\` **---** \`${amountsuperuncommon}\`` },
                { name: config.embeds.nameboxeschances11, value: `\`${chancesupercommon}%\` **---** \`${amountsupercommon}\`` },
            )
            .setFooter(config.embed.embedfooter);

        const newEmbed4 = new Discord.MessageEmbed()
            .setColor(config.base.basecolor)
            .setTitle(config.embeds.titleboxeschance4)
            .setImage(config.embed.embedimage)
            .setDescription(`Here are all the probabilities of the box \`Normal\` that you can buy and open. It also shows you the \`maximum\` amount of scraps you can get for each box and rarity. The minimum is \`1\` everywhere.`)
            .addFields(
                { name: config.embeds.nameboxeschances12, value: `> **Normal Box**` },
                { name: config.embeds.nameboxeschances13, value: `\`${chancenormalrare}%\` **---** \`${amountnormalrare}\`` },
                { name: config.embeds.nameboxeschances14, value: `\`${chancenormaluncommon}%\` **---** \`${amountnormaluncommon}\`` },
                { name: config.embeds.nameboxeschances15, value: `\`${chancenormalcommon}%\` **---** \`${amountnormalcommon}\`` },
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