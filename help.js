module.exports = {
    name: 'help',
    description: "This is a help command.",
    execute(message, args){
        message.channel.send('How can I help you?');
    }
}