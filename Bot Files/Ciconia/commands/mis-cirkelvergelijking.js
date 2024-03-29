// Los een cirkel vergelijking op. Dit is een complexe berekening binnen wiskunde B.
// Net als de andere misc cmds, gewoon voor de lol gemaakt. 
// Vul je gegevens in, en hij berekent het. 
// Hij laat ook stap voor stap zien hoe je het moet berekenen.

const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "cirkel",
    aliases: config.aliases.aliasescirkelvergelijking,
    cooldown: config.cooldown.cooldowncirkelvergelijking,
    permissions: config.permissions.permissioncirkelvergelijking,
    description: "Calculate a circle equation.",
    execute(message, args, cmd, client, Discord) {
        try {
            const a = args[0];
            const b = args[1];
            const c = args[2];

            if (!args[0]) {
                return message.channel.send("You are missing the value \`A\`")
            } else if (!args[1]) {
                return message.channel.send("You are missing the value \`B\`")
            } else if (!args[2]) {
                return message.channel.send("You are missing the value \`C\`")
            }

            const ahelft = a / 2;
            const bhelft = b / 2;

            const ahelftkwa = ahelft * ahelft;
            const bhelftkwa = bhelft * bhelft;

            const abc = ahelftkwa + bhelftkwa + c;

            const wabc = Math.sqrt(abc);

            //Input
            const wabcafgerond = Math.round((wabc + Number.EPSILON) * 1) / 1;

            const diameter = wabcafgerond * 2;

            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .setTitle(config.embeds.titlecircle)
                .setImage(config.embed.embedimage)
                .setDescription(config.embeds.descriptioncircle)
                .addFields(
                    {
                        name: `1. Begin:`,
                        value: `X² + Y² - ${a}X - ${b}Y - ${c} = 0`,
                    },
                    {
                        name: `2. Ordenen gegevens:`,
                        value: `X² - ${a}X + Y² - ${b}Y - ${c} = 0`,
                    },
                    {
                        name: `3. Haakjes:`,
                        value: `(X - ${ahelft})² - ${ahelftkwa} + (Y - ${bhelft})² - ${bhelftkwa} - ${c} = 0`,
                    },
                    {
                        name: `4. Optellen overigen:`,
                        value: `(X - ${ahelft})² + (Y - ${bhelft})² -${abc}= 0`,
                    },
                    {
                        name: `5. Naar andere kant:`,
                        value: `(X - ${ahelft})² + (Y - ${bhelft})² = ${abc}`,
                    },
                    {
                        name: `6. Middelpunt (M) bepalen:`,
                        value: `M(${ahelft}, ${bhelft})`,
                    },
                    {
                        name: `7. Straal bepalen:`,
                        value: `√${abc} geeft een straal van ${wabcafgerond}. De diameter is dus ${diameter}.`,
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
