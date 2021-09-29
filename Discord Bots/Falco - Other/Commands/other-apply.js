module.exports = {
    name: 'apply',
    aliases: [],
    cooldown: process.env.ASSOFT,
    permissions: ["SEND_MESSAGES"],
    description: "Shows the apply form.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send('If you would like to apply to one or our roles, please fill in this form: https://forms.gle/pabpqPiWeBp9aZ2a8');
    }
}
