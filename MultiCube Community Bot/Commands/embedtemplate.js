module.exports = {
    name: 'embedtemplate',
    description: 'Embed template for devs.',
    permissions: ["SEND_MESSAGES"],
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffb1b1')
        .setTitle('Embed Template')
        .setImage('https://i.imgur.com/neCyTDH.png')
        .setDescription('Template')
        .addFields(
            {name: 'A', value: 'X'},
            {name: 'B:', value: 'Y'}
        )
        .setFooter('Stats and bot profided by Complex. Usage: -embedtemplate.');

        message.channel.send(newEmbed);
    }
}