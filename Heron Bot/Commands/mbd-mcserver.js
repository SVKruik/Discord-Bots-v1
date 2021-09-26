const util = require('minecraft-server-util')

module.exports = {
    name: 'mcserver',
    aliases: ['mc', 'mccheck', 'minecraftserver'],
    cooldown: process.env.ASMID,
    permissions: ["SEND_MESSAGES"],
    description: 'Displays some server statistics.',
    execute(message, args, cmd, client, Discord){
        if(!args[0]) return message.channel.send('Please enter a valid Minecraft server IP!');
        if(!args[1]) return message.channel.send('Please enter a valid Minecraft server port!');
    
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor(process.env.MBDCLR)
            .setTitle('Minecraft Server Stats')
            .setURL(process.env.MBDURL)
            .setImage(process.env.MBDIMG)
            .setDescription('This embed displays the server stats of a requested server.')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version},
                {name: 'Port', value: response.port},
                {name: 'Mods', value: response.modInfo}
            )
            .setFooter(process.env.MBDFTR)
            
            message.channel.send(embed);
        })
        .catch ((error) => {
            message.channel.send('There was an error finding the specified server!');
        })
    }
}