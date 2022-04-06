// Bereken je cijfer

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "cijfer",
    aliases: config.aliases.aliasescijfer,
    cooldown: config.cooldown.cooldowncijfer,
    permissions: config.permissions.permissioncijfer,
    description: "Calculate your note for a school test with the Dutch calc system.",
    async execute(message, args, cmd, client, Discord) {
        try {
            const punten = args[0]
            const totpunten = args[1]
            const nterm = args[2]
            if (!args[0]) {
                return message.channel.send({ content: `Wat zijn jouw behaalde punten?` })
            }
            if (!args[1]) {
                return message.channel.send({ content: `Wat is het totaal aantal punten?` })
            }
            if (!args[2]) {
                return message.channel.send({ content: `Wat is de N-term? Normaal gesproken is dit \`1\`.` })
            }

            const cijfer = punten / totpunten * 9 + nterm

            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titleembedtemplate)
                .setImage(config.embed.embedimage)
                .setDescription(config.embeds.descriptionembedtemplate)
                .addFields(
                    {
                        name: `> **Jouw Punten:**`,
                        value: `${punten}`,
                    },
                    {
                        name: `> **Totaal Aantal Punten:**`,
                        value: `${totpunten}`,
                    },
                    {
                        name: `> **Cijfer:**`,
                        value: `${cijfer}`,
                    }
                )
                .setFooter({ text: config.embed.embedfooter });

            message.channel.send({ embeds: [newEmbed] })
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
        }
    }
}