module.exports = {
    name: 'rules',
    description: "Our Server Rules",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffb1b1')
        .setTitle('Server Rules')
        .setDescription('This embed displays all of our Server Rules')
        .addFields(
            {name: 'Rule 1', value: 'Treat everyone with respect! Bullying or abusing someone is not allowed!'},
            {name: 'Rule 2', value: 'Help with keeping the server a nice and wholesome area!'},
            {name: 'Rule 3', value: 'Do not spam or advertise yourself. This server is dedicated to our Minecraft server, not to advertise or promote yourself.'},
            {name: 'Rule 4', value: 'Do not post NSFW or inappropriate content.'},
            {name: 'Rule 5', value: 'If someone breaks the upper rules, they will receive a ban or kick. Please report any rule breakers to the staff!'},
            {name: 'Rule 6', value: 'If you want a higher role/rank, please fill in the form. Do not beg for a better role/rank!'}
        )
        .setFooter('Sent By The MultiCube Community Bot');

        message.channel.send(newEmbed)
    }
}