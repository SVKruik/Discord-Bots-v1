module.exports = {
    name: 'commandtemplate',
    aliases: ['cmdtemplate', 'cmdtemp', 'cmdtmplt', 'cmdtmplte'],
    cooldown: process.env.ASMID,
    description: 'Command template for devs.',
    permissions: ["ADMINISTRATOR"],
    execute(message, args, cmd, client, Discord) {
        message.channel.send('Template')
    }
}