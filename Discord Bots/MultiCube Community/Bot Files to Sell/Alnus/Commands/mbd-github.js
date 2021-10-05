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
        .setDescription('This is our GitHub repository. You can find a lot of information about anything there, so check it out!')
        .addFields(
            {name: 'Link:', value: 'https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers'},
            {name: '-----', value: 'For more specific links:'},
            {name: 'Bot Files:', value: 'https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/tree/main/Discord%20Bots'},
            {name: 'Child Servers:', value: 'https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/tree/main/Child%20Servers'},
            {name: 'Issues:', value: 'https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/issues'},
            {name: 'Discussions:', value: 'https://github.com/PuffinKwadraat/MultiCube-and-Child-Servers/discussions/'}
        )
        .setFooter(process.env.MBDFTR);

        message.channel.send(newEmbed);
    }
}