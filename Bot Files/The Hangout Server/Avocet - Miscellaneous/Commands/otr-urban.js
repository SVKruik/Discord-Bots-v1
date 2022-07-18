// Zoek de betekenis van een woord op.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const axios = require('axios');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: "urban",
    aliases: config.aliases.aliasesurban,
    cooldown: config.cooldown.cooldownurban,
    permissions: config.permissions.permissionurban,
    description: "Collect the definition of a word using the Urban Dictionary.",
    async execute(message, args, cmd, client, Discord) {
        try {
            // const Url = 'https://api.github.com/repos/PuffinKwadraat/MultiCube-Public/commits';
            // axios.get(Url)
            //     .then(data => console.log(data))
            //     .catch(err => console.log(err))
            const term = args.join(' ');
            // const term1 = term.charAt(0).toUpperCase() + term.slice(1);
            const query = new URLSearchParams({ term });
            const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
                .then(response => response.json());

            const [answer] = list;
            const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
            try {
                const newEmbed = new Discord.MessageEmbed()
                    .setColor(config.base.basecolor)
                    .setTitle(config.embeds.titleurban)
                    .setImage(config.embed.embedimage)
                    .setDescription(`Here is the definition of the word \`${term}\`:`)
                    .addFields(
                        { name: 'Definition', value: trim(answer.definition, 1024) },
                        { name: 'Example', value: trim(answer.example, 1024) },
                        { name: 'Rating', value: `\`${answer.thumbs_up}\` thumbs up. \`${answer.thumbs_down}\` thumbs down.` },
                    )
                    .setFooter({ text: config.embed.embedfooter });

                message.channel.send({ embeds: [newEmbed] })
                console.log(`${message.author.username} looked up this term: || ${term} ||`)
            } catch (err) {
                return message.channel.send(`No results found for **${term}**.`);
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
        }
    },
};
