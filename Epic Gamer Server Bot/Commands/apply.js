module.exports = {
    name: 'apply',
    permissions: ["SEND_MESSAGES"],
    description: "This is an apply command.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send('If you would like to apply to one or our roles, please fill in this form: https://forms.gle/pabpqPiWeBp9aZ2a8');
    }
}
