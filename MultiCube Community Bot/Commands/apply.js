module.exports = {
    name: 'apply',
    description: "This is an apply command.",
    execute(client, message, args){
        message.channel.send('If you would like to apply to one or our roles, please fill in this form: https://forms.gle/pabpqPiWeBp9aZ2a8');
    }
}
