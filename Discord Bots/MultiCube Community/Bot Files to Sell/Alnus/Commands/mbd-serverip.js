module.exports = {
    name: 'serverip',
    aliases: ['server'],
    cooldown: process.env.ASMID,
    description: 'Display the server ip for MultiCube',
    permissions: ["SEND_MESSAGES"],
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor(process.env.MBDCLR)
        .setTitle('MultiCube Server IP')
        .setImage(process.env.MBDIMG)
        .setURL(process.env.MBDURL)
        .setDescription('Here is the Server IP for MultiCube!')
        .addFields(
            {name: 'Server IP:', value: 'multicube.aternos.me'},
            {name: 'Version:', value: '1.16.5'},
            {name :'Note:', value: 'No additional content needed.'}
        )
        .setFooter(process.env.MBDFTR);

        message.channel.send(newEmbed);
    }
}