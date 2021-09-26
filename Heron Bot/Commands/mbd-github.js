module.exports = {
    name: 'github',
    aliases: ['gh'],
    cooldown: process.env.ASMID,
    description: 'Displays all import links to our GitHub repository.',
    permissions: ["SEND_MESSAGES"],
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor(process.env.MBDCLR)
        .setTitle('GitHub Repository')
        .setImage(process.env.MBDIMG)
        .setURL(process.env.MBDURL)
        .setDescription('This embed shows the link to our GitHub Repository. You can find a lot of information about anything there, so check it out!')
        .addFields(
            {name: 'Link:', value: 'https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers'},
            {name: '-----', value: 'For more specific links:'},
            {name: 'Bot Files:', value: 'https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/tree/main/MultiCube%20Community%20Bot'},
            {name: 'Child Servers:', value: 'https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/tree/main/Child%20Servers'},
            {name: 'Issues:', value: 'https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/issues'},
            {name: 'Discussions (main):', value: 'https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/discussions/11'}
        )
        .setFooter(process.env.MBDFTR);

        message.channel.send(newEmbed);
    }
}