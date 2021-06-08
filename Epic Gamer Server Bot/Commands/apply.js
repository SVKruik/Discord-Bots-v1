module.exports = {
    name: 'apply',
    permissions: ["SEND_MESSAGES"],
    description: "This is an apply command.",
    execute(message, args, cmd, client){
        message.channel.send('If you would like to apply to one or our roles, please fill in this form: https://forms.gle/pabpqPiWeBp9aZ2a8');
    }
}
