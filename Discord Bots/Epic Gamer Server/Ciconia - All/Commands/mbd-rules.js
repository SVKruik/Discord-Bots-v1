module.exports = {
    name: 'rules',
    aliases: ['rule'],
    cooldown: process.env.ASMID,
    description: "Displays an embed with our active server rules.",
    permissions: ["SEND_MESSAGES"],
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor(process.env.MBDCLR)
        .setTitle('Server Rules')
        .setURL(process.env.MBDURL)
        .setImage(process.env.MBDIMG)
        .setDescription('This embed displays all of our Server Rules')
        .addFields(
            {name: 'Rule 1', value: 'Treat everyone with respect! Bullying or abusing someone is not allowed!'},
            {name: 'Rule 2', value: 'Help with keeping the server a nice and wholesome area!'},
            {name: 'Rule 3', value: 'Do not spam or advertise yourself. This server is dedicated to our Minecraft server, not to advertise or promote yourself.'},
            {name: 'Rule 4', value: 'Do not post NSFW or inappropriate content.'},
            {name: 'Rule 5', value: 'If someone breaks the upper rules, they will receive a ban or kick. Please report any rule breakers to the staff!'},
            {name: 'Rule 6', value: 'If you want a higher role/rank, please fill in the form. Do not beg for a better role/rank!'}
        )
        .setFooter(process.env.MBDFTR);

        message.channel.send(newEmbed)
    }
}