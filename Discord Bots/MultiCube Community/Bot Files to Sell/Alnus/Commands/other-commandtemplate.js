module.exports = {
    name: 'commandtemplate',
    aliases: ['cmdtemp'],
    cooldown: process.env.ASADMIN,
    description: 'Command template for devs.',
    permissions: ["ADMINISTRATOR"],
    execute(message, args, cmd, client, Discord) {
        message.channel.send('Simple Text Template')
    }
}