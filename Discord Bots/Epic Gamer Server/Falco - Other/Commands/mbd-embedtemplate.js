module.exports = {
    name: 'embedtemplate',
    aliases: ['mbdtemp'],
    cooldown: process.env.ASMID,
    description: 'Embed template for devs.',
    permissions: ["SEND_MESSAGES"],
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor(process.env.MBDCLR)
        .setTitle('Embed Template')
        .setImage(process.env.MBDIMG)
        .setURL(process.env.MBDURL)
        .setDescription('Template')
        .addFields(
            {name: 'A', value: 'X'},
            {name: 'B:', value: 'Y'}
        )
        .setFooter(process.env.MBDFTR);

        message.channel.send(newEmbed);
    }
}