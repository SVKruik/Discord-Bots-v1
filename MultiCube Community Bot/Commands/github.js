module.exports = {
    name: 'github',
    description: "This is a github command.",
    execute(message, args, cmd, client){
        message.channel.send('https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers#readme');
    }
}