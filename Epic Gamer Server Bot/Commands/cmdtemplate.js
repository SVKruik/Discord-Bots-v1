module.exports = {
    name: 'cmdtemplate',
    description: 'Command template for devs.',
    permissions: ["ADMINISTRATOR"],
    execute(message, args, cmd, client, Discord) {
        message.channel.send('Template')
    }
}