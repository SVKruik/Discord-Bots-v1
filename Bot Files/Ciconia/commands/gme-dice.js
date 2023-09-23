// Simpele dobbelsteen. Kiest random iets uit de 'dv' array.

const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
    name: "dice",
    aliases: config.aliases.aliasesdice,
    cooldown: config.cooldown.cooldowndice,
    permissions: config.permissions.permissiondice,
    description: "Roll the dice!",
    async execute(message, args, cmd, client, Discord) {
        try {
            const dv = ["1! 🎲", "2! 🎲", "3! 🎲", "4! 🎲", "5! 🎲", "6! 🎲"];
            const random = dv[Math.floor(Math.random() * dv.length)];
            message.channel.send(random);
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
        }
    },
};