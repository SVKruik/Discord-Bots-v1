const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs');

const memberCounter = require('./Counters/member-counter');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./Handlers/${handler}`)(client, Discord);
})

client.on('ready', ( )=> {
    client.user.setActivity('discord.js', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
    client.user.setPresence({ activity: { name: 'Intense BedWars' }, status: 'idle' })
      .then(console.log)
      .catch(console.error);
})


client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('820246692867342356').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});

client.login(process.env.DISCORD_TOKEN);