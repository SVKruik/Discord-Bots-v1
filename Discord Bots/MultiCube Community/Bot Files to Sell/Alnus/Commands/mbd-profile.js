module.exports = {
    name: 'profile',
    aliases: ['pro'],
    cooldown: process.env.ASMID,
    description: 'Displays all Database data we have of your account.',
    permissions: ["SEND_MESSAGES"],
    execute(message, args, cmd, client, Discord, profileData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor(process.env.MBDCLR)
        .setTitle('System Profile')
        .setImage(process.env.MBDIMG)
        .setURL(process.env.MBDURL)
        .setDescription('Here is all your Data we have stored. This is for the Level and Economy System.')
        .addFields(
            {name: '---', value: '> **General:**'},
            {name: 'Name:', value: `${message.author.username}`},
            {name: 'userID:', value: `${profileData.userID}`},
            {name: 'serverID:', value: `${profileData.serverID}`},
            {name: '---', value: '> **Economy:**'},
            {name: 'Coins:', value: `${profileData.coins}`},
            {name: 'Bank:', value: `${profileData.bank}`},
            {name: '---', value: '> **Level:**'},
            {name: 'Level:', value: `${profileData.level}`},
            {name: 'Experience:', value: `${profileData.experience}`},
            {name: '---', value: '> **Technical:**'},
            {name: '_id:', value: `${profileData._id}`},
            {name: '__v:', value: `${profileData.__v}`}
        )
        .setFooter(process.env.MBDFTR);

        message.channel.send(newEmbed);
    }
}