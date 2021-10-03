const profileModel = require("../models/profileSchema");
module.exports = {
    name: 'experience',
    aliases: ['exp', 'xp'],
    cooldown: process.env.ASSOFT,
    permissions: ["SEND_MESSAGES"],
    description: "Displays your current server experience.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`${message.author.username}, this is the amount of Experience you have: \`${profileData.experience}\`.`)
    },
}