// Flip a coin. Kop of munt Engelstalig

const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "flipacoin",
    aliases: config.aliases.aliasesflipacoinen,
    cooldown: config.cooldown.cooldownflipacoinen,
    permissions: config.permissions.permissionflipacoinen,
    description: "Flip a coin!",
    async execute(message, args, cmd, client, Discord) {
        try {
            if (!args[0]) {
                return message.channel.send("Please also choose your winning side.");
            }
            const list = ["heads", "head", "tails", "tail"];
            const fac = [`Heads!`, `Tails!`];
            const random = fac[Math.floor(Math.random() * fac.length)];

            if (!list.includes(args[0].toLowerCase())) {
                return message.channel.send(`\`${args[0]}\` is not a valid option.`);
            }
            message.channel.send(random);

            var lowerrandom = random.toLowerCase();
            var higherrandom = random.toUpperCase();

            if (lowerrandom.substring(0, 4) == args[0]) {
                console.log(`I chose ${higherrandom}.`);
                return message.channel.send("You win! - 🟢");
            } else if (lowerrandom.substring(0, 4) != args[0]) {
                console.log(`I chose ${higherrandom}.`);
                return message.channel.send(`You lose! - 🔴`);
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
        }
    },
};
