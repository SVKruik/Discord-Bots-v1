module.exports = {
    name: 'level',
    aliases: ['lvl'],
    cooldown: process.env.ASSOFT,
    permissions: ["SEND_MESSAGES"],
    description: "Displays your current exp/server level.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`${message.author.username}, your current Server Level is \`${profileData.level}\`.`);
    }
}