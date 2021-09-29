const profileModel = require("../models/profileSchema");
module.exports = {
    name: 'level',
    aliases: ['lvl'],
    cooldown: process.env.ASSOFT,
    permissions: ["SEND_MESSAGES"],
    description: "Displays your current server level.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`${message.author.username}, this is your Server Level: \`${profileData.level}\`.`)
    },
}