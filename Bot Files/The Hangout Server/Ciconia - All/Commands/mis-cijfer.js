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
            const nterm1 = args[2]
            const nterm = nterm1 * 1
            if (!punten) {
                return message.channel.send({ content: `Wat zijn jouw behaalde punten?` })
            }
            if (!totpunten) {
                return message.channel.send({ content: `Wat is het totaal aantal punten?` })
            }
            if (!nterm) {
                return message.channel.send({ content: `Wat is de N-term? Normaal gesproken is dit \`1\`.` })
            }
            if (punten > totpunten) {
                return message.channel.send({ content: `Je behaalde punten kunnen niet groter zijn dan het totaal aantal punten.` })
            }
            if (nterm > 2) {
                return message.channel.send({ content: `De N-term kan niet groter zijn dan \`2\`.` })
            }

            const cijfer1 = Math.round(((punten / totpunten) * 9) * 10) / 10
            const cijfer = cijfer1 + nterm

            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titlecijfer)
                .setImage(config.embed.embedimage)
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