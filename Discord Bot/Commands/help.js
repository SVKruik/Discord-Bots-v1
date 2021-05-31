module.exports = {
    name: 'help',
    description: "This is a help command.",
    execute(client, message, args, Discord){
        message.channel.send('How can I help you?');
    }
}