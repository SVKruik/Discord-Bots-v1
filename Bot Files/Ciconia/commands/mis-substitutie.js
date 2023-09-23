// Substitutie berekening. Complexe berekening binnen wiskunde B. Veel stappen.
// Net als de andere misc cmds, gewoon voor de lol gemaakt. 
// Vul je gegevens in, en hij berekent het. 
// Hij laat ook stap voor stap zien hoe je het moet berekenen.

const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "substitutie",
    aliases: config.aliases.aliasessubstitutie,
    cooldown: config.cooldown.cooldownsubstitutie,
    permissions: config.permissions.permissionsubstitutie,
    description: "Substitute",
    execute(message, args, cmd, client, Discord) {
        try {
            const username = message.client.user.id;

            const cirkela = args[0]; // A
            const cirkelb = args[1]; // B
            const cirkelc = args[2]; // C

            const formulea = args[3]; // A
            const formulexlow = `${args[5]}`; // B
            const formulex = formulexlow.toUpperCase();

            const cirkelnaam = args[4]; // c: ...

            if (!args[0]) {
                return message.channel.send("You are missing the value \`A\` of the circle formula.")
            } else if (!args[1]) {
                return message.channel.send("You are missing the value \`B\` of the circle formula.")
            } else if (!args[2]) {
                return message.channel.send("You are missing the value \`C\` of the circle formula.")
            } else if (!args[3]) {
                return message.channel.send("You are missing the value \`A\` of the line formula.")
            } else if (!args[4]) {
                return message.channel.send("You are missing the name of your circle formula.")
            } else if (!args[5]) {
                return message.channel.send("You are missing the name of your variable in the line formula.")
            }

            const cirkela2 = cirkela * 2
            const cirkelb2 = cirkelb * 2

            const cirkelakwa = cirkela * cirkela
            const cirkelbkwa = cirkelb * cirkelb
            const cirkeloverigen = cirkelakwa + cirkelbkwa - cirkelc

            const formulea2 = formulea * 2
            const formuleakwa = formulea * formulea

            const xkwavol = formuleakwa + 1

            const formulea2vol = formulea2 - cirkela2

            const formulea2kwa = formulea2 * formulea2
            const formulea2kwacon = formulea2 * 2
            const formulea2kwac = formulea2kwacon * formulea2vol
            const formulea2volkwa = formulea2vol * formulea2vol

            if (args[6] === "delete") {
                message.delete();
            } else if (args[6] === "del" || args[6] === "d") {
                message.delete();
            }

            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titlesubstitutie)
                .setImage(config.embed.embedimage)
                .setDescription(config.embeds.descriptionsubstitutie)
                .addFields(
                    {
                        name: `1. Opdracht:`,
                        value: `Gegeven is de cirkel ${cirkelnaam}: (X - ${cirkela})² + (Y- ${cirkelb})² = ${cirkelc}. Bereken voor welke waarden van ${formulex} de lijn Y = ${formulea}X + ${formulex} de cirkel raakt.`,
                    },
                    {
                        name: `2. Cirkel formule opstellen:`,
                        value: `${cirkelnaam}: (X - ${cirkela})² + (Y- ${cirkelb})² = ${cirkelc}`,
                    },
                    {
                        name: `---`,
                        value: `X² - ${cirkela2}X + ${cirkelakwa} + Y² - ${cirkelb2}Y + ${cirkelbkwa} = ${cirkelc}`,
                    },
                    {
                        name: `---`,
                        value: `X² + Y² - ${cirkela2}X - ${cirkelb2}Y + ${cirkeloverigen} = 0`,
                    },
                    {
                        name: `4. Substitutie van Y = ${formulea}X + ${formulex} in X² + Y² - ${cirkela2}X - ${cirkelb2}Y + ${cirkeloverigen} = 0`,
                        value: `X² + (${formulea}X + ${formulex}) - ${cirkela2}X - ${cirkelb2}(${formulea}X + ${formulex}) + ${cirkeloverigen} = 0`,
                    },
                    {
                        name: `---`,
                        value: `X² + ${formuleakwa}X² - ${formulea2}${formulex}X + ${formulex}² - ${cirkela2}X - ${formulea2}X + ${cirkelb2}${formulex} + ${cirkeloverigen} = 0`,
                    },
                    {
                        name: `---`,
                        value: `${xkwavol}X² + (- ${formulea2}X ${formulea2vol})X + ${formulex}² + ${cirkelb2}${formulex} + ${cirkeloverigen} = 0`,
                    },
                    {
                        name: `ABC Formule Toepassen`,
                        value: `(B)² - 4 ⋅ A ⋅ C`,
                    },
                    {
                        name: `Invullen geeft:`,
                        value: `(- ${formulea2}X ${formulea2vol})² - 4 ⋅ ${xkwavol} ⋅ (${formulex}² + ${cirkelb2}${formulex} + ${cirkeloverigen})`,
                    },
                    {
                        name: `Vereenvoudigen:`,
                        value: `${formulea2kwa}${formulex} + ${formulea2kwac} + ${formulea2volkwa} `,
                    },
                    // {
                    //   name: `---`,
                    //   value: ``,
                    // },
                    // {
                    //   name: `---`,
                    //   value: ``,
                    // },
                    // {
                    //   name: `Je kan hierop de ABC-Formule toepassen, of het boek volgen. Boek doet het met de product-som-methode. Zie hieronder. Vereenvoudigen geeft:`,
                    //   value: `\`\`\`${aabcformuleafdeelaabc}${formulenaam}² + ${babcformuleafdeelaabc}${formulenaam} + ${cabcformuleafdeelaabc} = 0\`\`\``,
                    // },
                    {
                        name: `Geschikt paar vinden (product som-methode):`,
                        value: `In het geval van D = ${formulex}² - 38${formulex} + 72`,
                    },
                    {
                        name: `---`,
                        value: `Q = 2 V Q = 36`,
                    },
                    {
                        name: `**--------**`,
                        value: `> De bovenstaande product-som methode is een voorbeeld uit het boek. Het is niet mogelijk dat ik, als in <@${username}>, dit voor je doe.`,
                    }
                )
                .setFooter({ text: config.embed.embedfooter });

            message.channel.send({ embeds: [newEmbed] });
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
        }
    },
};
