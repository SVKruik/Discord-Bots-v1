const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs');
const prefix = '-';

const memberCounter = require('./Counters/member-counter');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./Handlers/${handler}`)(client, Discord);
})

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('820246692867342356').send(`Welcome <@${guildMember.user.id} to the MultiCube Community! Make sure to check our server rules!`)
});

client.login('ODIyMDE2NzYzOTQ0MjM5MTQ0.YFMIxA.wQrxv28JGVwH-YaE7ihWn_keqEE');