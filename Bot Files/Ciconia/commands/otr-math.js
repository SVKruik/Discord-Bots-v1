// Bereken iets simpels als 1 + 1. 
// Werkt met args
// Werkt met een NPM package

const math = require("mathjs");
const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "mathematics",
    aliases: config.aliases.aliasesmath,
    cooldown: config.cooldown.cooldownmath,
    permissions: config.permissions.permissionmath,
    description: "Basic calculation.",
    execute(message, args, cmd, client, Discord) {
        try {
            try {
                const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                    .setColor(config.base.basecolor)
                    .setTitle(`Calculator`)
                    .setImage(config.embed.embedimage)
                    .setDescription("Here is the answer to your question:")
                    .addFields(
                        {
                            name: "Your question:",
                            value: args.join(""),
                        },
                        {
                            name: "Answer:",
                            value: Math.round(math.evaluate(args.join(" ")) * 100) / 100,
                        }
                    )
                    .setFooter({ text: config.embed.embedfooter });

                message.channel.send({ embeds: [newEmbed] });
            } catch (err) {
                console.log(err)
                message.channel.send("I don't understand your question.");
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
        }
    },
};
